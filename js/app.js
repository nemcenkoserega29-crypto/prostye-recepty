// Инициализация клиента Supabase
const sb = window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);

const App = {
    user: null,
    favIds: [],

    getLang() {
        return localStorage.getItem('sr_lang') || 'ru';
    },

    setLang(lang) {
        localStorage.setItem('sr_lang', lang);
        location.reload();
    },

    async init() {
        this.applyTranslations();
        const { data: { session } } = await sb.auth.getSession();
        this.user = session ? session.user : null;

        // Показываем ссылку на модерацию только администратору
        if (this.user && this.user.email === SUPABASE_CONFIG.ADMIN_EMAIL) {
            const nav = document.querySelector('header nav');
            if (nav && !document.getElementById('adminNavLink')) {
                const a = document.createElement('a');
                a.id = 'adminNavLink';
                a.href = 'admin.html';
                a.textContent = I18N[this.getLang()].nav_admin;
                if (location.pathname.endsWith('admin.html')) a.classList.add('active');
                nav.appendChild(a);
            }
        }

        if (this.user) {
            await this.loadFavorites();
        }
    },

    applyTranslations() {
        const lang = this.getLang();
        const dict = I18N[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    },

    // Получение всех одобренных рецептов из облака + базовые
    async getApprovedRecipes() {
        const { data, error } = await sb
            .from('recipes')
            .select('*')
            .eq('status', 'approved')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Ошибка загрузки рецептов:', error);
            return SEED_RECIPES;
        }
        return [...(data || []), ...SEED_RECIPES];
    },

    // Загрузка избранного текущего пользователя
    async loadFavorites() {
        if (!this.user) return [];
        const { data } = await sb
            .from('favorites')
            .select('recipe_id')
            .eq('user_id', this.user.id);
        this.favIds = data ? data.map(item => Number(item.recipe_id)) : [];
        return this.favIds;
    },

    // Добавление / удаление из избранного в облаке
    async toggleFavorite(recipeId, btn) {
        if (!this.user) {
            alert('Войдите в личный кабинет, чтобы сохранять рецепты в избранное!');
            window.location.href = 'profile.html';
            return;
        }
        recipeId = Number(recipeId);
        const lang = this.getLang();
        const exists = this.favIds.includes(recipeId);

        if (exists) {
            await sb.from('favorites').delete().match({ user_id: this.user.id, recipe_id: recipeId });
            this.favIds = this.favIds.filter(id => id !== recipeId);
            if (btn) {
                btn.classList.remove('btn-accent');
                btn.textContent = '★';
            }
        } else {
            await sb.from('favorites').insert({ user_id: this.user.id, recipe_id: recipeId });
            this.favIds.push(recipeId);
            if (btn) {
                btn.classList.add('btn-accent');
                btn.textContent = I18N[lang].in_fav;
            }
        }
    },

    // Загрузка фото блюда в Supabase Storage
    async uploadImage(file) {
        if (!file) {
            return "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80";
        }
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;

        const { error: uploadError } = await sb.storage
            .from('recipe-images')
            .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data } = sb.storage.from('recipe-images').getPublicUrl(fileName);
        return data.publicUrl;
    },

    renderRecipeCard(recipe) {
        const lang = this.getLang();
        const dict = I18N[lang];
        const isFav = this.favIds.includes(Number(recipe.id));
        const title = recipe.title[lang] || recipe.title.ru;
        const desc = recipe.description[lang] || recipe.description.ru;

        return `
            <article class="card">
                <img src="${recipe.image_url}" alt="${title}">
                <div class="card-body">
                    <div class="card-meta">
                        <span>⏱ ${recipe.time} ${dict.time_min}</span>
                        <span>🍽 ${recipe.base_portions}</span>
                    </div>
                    <a href="recipe.html?id=${recipe.id}" class="card-title">${title}</a>
                    <p class="card-desc">${desc}</p>
                    <div class="card-footer">
                        <a href="recipe.html?id=${recipe.id}" class="btn btn-outline">${dict.steps}</a>
                        <button class="btn ${isFav ? 'btn-accent' : ''}" onclick="App.toggleFavorite(${recipe.id}, this)">
                            ${isFav ? dict.in_fav : '★'}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }
};
