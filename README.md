## Технологии

- ⚡ [Nuxt 3](https://nuxt.com/) - современный фреймворк на Vue.js
- 🎨 [TailwindCSS](https://tailwindcss.com/) - утилитарный CSS-фреймворк
- 💾 [Pinia](https://pinia.vuejs.org/) - управление состоянием

## Установка и запуск

### Предварительные требования

- Node.js (v18 или выше)
- npm или yarn

### Установка зависимостей

```bash
# npm
npm install

# yarn
yarn install
```

### Настройка окружения

Создайте файл `.env` в корне проекта:

```
NUXT_PUBLIC_API_BASE=https://your-api-url.com
```

### Запуск для разработки

```bash
# npm
npm run dev

# yarn
yarn dev
```

### Сборка для продакшн

```bash
# npm
npm run build

# yarn
yarn build
```

## Структура проекта

```
.
├── api/                # API-клиенты и запросы
├── assets/             # Стили, изображения и другие ресурсы
├── components/         # Vue компоненты
├── composables/        # Композиционные функции
├── layouts/            # Шаблоны страниц
│   ├── AuthLayout.vue  # Шаблон для страниц аутентификации
│   └── MainLayout.vue  # Основной шаблон приложения
├── pages/              # Страницы приложения
│   ├── auth.vue        # Страница авторизации
│   └── index.vue       # Главная страница
├── public/             # Статические файлы
├── stores/             # Pinia хранилища
├── types/              # TypeScript типы и интерфейсы
├── app.vue             # Входная точка приложения
└── nuxt.config.ts      # Конфигурация Nuxt.js
```
