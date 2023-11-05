# fungi

Это монорепозиторий, содержащий весь код Fungi.

**Содержит в себе пакеты:**

- `./backend/api` (`@fungi/api`) - tRPC процедуры
- `./backend/db` (`@fungi/db`) - Инициализация БД
- `./backend/server` (`@fungi/server`) - Бэкенд сервер
- `./tooling/tunnel-dev` (`@fungi/tunnel-dev`) - Проброс бэкенд сервера для доступа из приложения
- `./frontend` (`@fungi/app`) - RN + Expo приложение
- `./website` (`@fungi/website`) - Сайт на Astro (SSR)

## Начало работы
Для работы с базой данных
```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/fungi"
```

1. Склонируйте репозиторий и зайдите в папку с ним
2. Установите зависимости - `npm i`
3. (опционально) Если хотите запустить бэкенд, то обязательно нужно инициализировать БД: `npm run init-db`

- Запустить только приложение: `npm run dev:app`
- Запустить только сервер: `npm run dev:server`
- Запустить приложение и сервер одновременно: `npm run dev`
