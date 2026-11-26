const I18N = {
    ru: {
        brand: "Простые рецепты",
        subtitle: "Домашняя еда на каждый день",
        nav_home: "Главная",
        nav_catalog: "Все рецепты",
        nav_profile: "Кабинет",
        nav_admin: "Модерация",
        hero_title: "Что приготовить из того, что есть дома?",
        hero_sub: "Отметьте продукты из холодильника — мы подберем подходящие блюда.",
        btn_find: "Подобрать рецепты",
        btn_reset: "Сбросить",
        cat_all: "Все категории",
        cat_breakfast: "Завтраки",
        cat_lunch: "Обеды и супы",
        cat_dinner: "Ужины",
        cat_grill: "Мангал и мясо",
        cat_preserve: "Заготовки",
        time_min: "мин",
        portions: "Порций:",
        ingredients: "Ингредиенты",
        steps: "Пошаговый рецепт",
        add_fav: "В избранное",
        in_fav: "В избранном ★",
        ad_label: "Реклама / Партнерский блок",
        profile_title: "Личный кабинет",
        tab_fav: "Мои избранные рецепты",
        tab_add: "Опубликовать свой рецепт",
        btn_logout: "Выйти"
    },
    kz: {
        brand: "Қарапайым рецепттер",
        subtitle: "Күнделікті үй тағамдары",
        nav_home: "Басты бет",
        nav_catalog: "Барлық рецепттер",
        nav_profile: "Жеке кабинет",
        nav_admin: "Модерация",
        hero_title: "Үйде бар өнімдерден не пісіруге болады?",
        hero_sub: "Тоңазытқыштағы өнімдерді белгілеңіз — біз сәйкес тағамдарды таңдаймыз.",
        btn_find: "Рецепттерді табу",
        btn_reset: "Тазарту",
        cat_all: "Барлық санаттар",
        cat_breakfast: "Таңғы ас",
        cat_lunch: "Түскі ас және сорпалар",
        cat_dinner: "Кешкі ас",
        cat_grill: "Мангал және ет",
        cat_preserve: "Қысқы дайындық",
        time_min: "мин",
        portions: "Порция:",
        ingredients: "Құрамы",
        steps: "Дайындау реті",
        add_fav: "Таңдаулыға қосу",
        in_fav: "Таңдаулыда ★",
        ad_label: "Жарнама / Серіктестік блок",
        profile_title: "Жеке кабинет",
        tab_fav: "Таңдаулы рецепттер",
        tab_add: "Өз рецептіңізді жариялау",
        btn_logout: "Шығу"
    },
    en: {
        brand: "Simple Recipes",
        subtitle: "Everyday homemade food",
        nav_home: "Home",
        nav_catalog: "All Recipes",
        nav_profile: "Profile",
        nav_admin: "Moderation",
        hero_title: "What to cook with what you have at home?",
        hero_sub: "Select ingredients from your fridge — we will find matching dishes.",
        btn_find: "Find Recipes",
        btn_reset: "Reset",
        cat_all: "All Categories",
        cat_breakfast: "Breakfast",
        cat_lunch: "Lunch & Soups",
        cat_dinner: "Dinner",
        cat_grill: "BBQ & Meat",
        cat_preserve: "Preserves",
        time_min: "min",
        portions: "Servings:",
        ingredients: "Ingredients",
        steps: "Step-by-step instructions",
        add_fav: "Save to Favorites",
        in_fav: "Saved ★",
        ad_label: "Advertisement / Partner Offer",
        profile_title: "Personal Account",
        tab_fav: "My Favorite Recipes",
        tab_add: "Publish Your Recipe",
        btn_logout: "Sign Out"
    }
};

const FRIDGE_INGREDIENTS = [
    { id: "potato", ru: "Картофель", kz: "Картоп", en: "Potato" },
    { id: "chicken", ru: "Курица", kz: "Тауық еті", en: "Chicken" },
    { id: "beef", ru: "Говядина / Фарш", kz: "Сиыр еті", en: "Beef / Mince" },
    { id: "egg", ru: "Яйца", kz: "Жұмыртқа", en: "Eggs" },
    { id: "flour", ru: "Мука", kz: "Ұн", en: "Flour" },
    { id: "milk", ru: "Молоко", kz: "Сүт", en: "Milk" },
    { id: "onion", ru: "Лук", kz: "Пияз", en: "Onion" },
    { id: "tomato", ru: "Помидоры", kz: "Қызанақ", en: "Tomatoes" },
    { id: "cheese", ru: "Сыр", kz: "Ірімшік", en: "Cheese" },
    { id: "lavash", ru: "Лаваш", kz: "Лаваш", en: "Lavash" },
    { id: "garlic", ru: "Чеснок", kz: "Сарымсақ", en: "Garlic" },
    { id: "cabbage", ru: "Капуста", kz: "Орамжапырақ", en: "Cabbage" }
];

const SEED_RECIPES = [
    {
        id: 1001,
        category: "dinner",
        time: 25,
        base_portions: 2,
        image_url: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
        tags: ["chicken", "lavash", "tomato", "onion", "garlic"],
        status: "approved",
        title: {
            ru: "Домашняя шаурма с хрустящей корочкой",
            kz: "Қытырлақ үй шаурмасы",
            en: "Crispy Homemade Chicken Shawarma"
        },
        description: {
            ru: "Сочная курица, свежие овощи и сливочно-чесночный соус в румяном лаваше.",
            kz: "Шырынды тауық еті, балғын көкөністер және сарымсақ тұздығы қосылған дәмді шаурма.",
            en: "Juicy pan-seared chicken, fresh veggies, and garlic sauce wrapped in toasted lavash."
        },
        ingredients: [
            { name: { ru: "Лаваш тонкий", kz: "Жұқа лаваш", en: "Thin lavash" }, amount: 2, unit: { ru: "шт", kz: "дана", en: "pcs" } },
            { name: { ru: "Филе куриное", kz: "Тауық еті", en: "Chicken breast" }, amount: 300, unit: { ru: "г", kz: "г", en: "g" } },
            { name: { ru: "Помидор свежий", kz: "Қызанақ", en: "Tomato" }, amount: 150, unit: { ru: "г", kz: "г", en: "g" } },
            { name: { ru: "Чеснок", kz: "Сарымсақ", en: "Garlic" }, amount: 2, unit: { ru: "зубч.", kz: "тіс", en: "cloves" } },
            { name: { ru: "Сметана + майонез", kz: "Қаймақ + майонез", en: "Sour cream & mayo" }, amount: 80, unit: { ru: "г", kz: "г", en: "g" } }
        ],
        steps: {
            ru: [
                { text: "Куриное филе нарежьте кусочками, посолите, поперчите и обжарьте до румяной корочки.", timer: 8 },
                { text: "Смешайте сметану, майонез и тертый чеснок. Нарежьте овощи.", timer: 0 },
                { text: "Смажьте лаваш соусом, выложите начинку и плотно сверните.", timer: 0 },
                { text: "Обжарьте на сухой сковороде по 2 минуты с каждой стороны.", timer: 4 }
            ],
            kz: [
                { text: "Тауық етін турап, тұз бен бұрыш қосып қызарғанша қуырыңыз.", timer: 8 },
                { text: "Қаймақ, майонез және сарымсақты араластырыңыз.", timer: 0 },
                { text: "Лавашқа тұздық жағып, ет пен көкөністерді салып ораңыз.", timer: 0 },
                { text: "Құрғақ табада екі жағынан 2 минуттан қуырыңыз.", timer: 4 }
            ],
            en: [
                { text: "Dice chicken breast, season, and sear over high heat until golden.", timer: 8 },
                { text: "Mix sour cream, mayo, and crushed garlic. Slice vegetables.", timer: 0 },
                { text: "Spread sauce on lavash, add filling, and roll tightly.", timer: 0 },
                { text: "Toast on a dry skillet for 2 minutes per side.", timer: 4 }
            ]
        }
    },
    {
        id: 1002,
        category: "breakfast",
        time: 20,
        base_portions: 3,
        image_url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
        tags: ["milk", "egg", "flour"],
        status: "approved",
        title: {
            ru: "Тонкие ажурные блины на молоке",
            kz: "Сүтке пісірілген жұқа құймақ",
            en: "Thin Lace Milk Pancakes"
        },
        description: {
            ru: "Проверенная пропорция: не рвутся при переворачивании, подходят под любую начинку.",
            kz: "Аударғанда жыртылмайтын, кез келген салмаға жарайтын құймақ.",
            en: "Foolproof ratio: never tears when flipping, great for savory or sweet fillings."
        },
        ingredients: [
            { name: { ru: "Молоко теплое", kz: "Жылы сүт", en: "Warm milk" }, amount: 500, unit: { ru: "мл", kz: "мл", en: "ml" } },
            { name: { ru: "Яйца куриные", kz: "Жұмыртқа", en: "Eggs" }, amount: 2, unit: { ru: "шт", kz: "дана", en: "pcs" } },
            { name: { ru: "Мука пшеничная", kz: "Бидай ұны", en: "Wheat flour" }, amount: 200, unit: { ru: "г", kz: "г", en: "g" } },
            { name: { ru: "Масло растительное", kz: "Өсімдік майы", en: "Vegetable oil" }, amount: 30, unit: { ru: "мл", kz: "мл", en: "ml" } }
        ],
        steps: {
            ru: [
                { text: "Взбейте яйца с щепоткой соли и сахара, влейте половину теплого молока.", timer: 0 },
                { text: "Всыпьте муку, размешайте без комочков, влейте остаток молока и масло.", timer: 0 },
                { text: "Выпекайте на разогретой сковороде по 1 минуте с каждой стороны.", timer: 15 }
            ],
            kz: [
                { text: "Жұмыртқаны тұз бен қантпен араластырып, жылы сүттің жартысын құйыңыз.", timer: 0 },
                { text: "Ұнды қосып илеңіз, қалған сүт пен майды құйыңыз.", timer: 0 },
                { text: "Қызған табада әр жағынан 1 минуттан пісіріңіз.", timer: 15 }
            ],
            en: [
                { text: "Whisk eggs with salt and sugar, pour in half of the warm milk.", timer: 0 },
                { text: "Add flour, whisk until smooth, then add remaining milk and oil.", timer: 0 },
                { text: "Cook on a hot skillet for 1 minute per side.", timer: 15 }
            ]
        }
    }
];
