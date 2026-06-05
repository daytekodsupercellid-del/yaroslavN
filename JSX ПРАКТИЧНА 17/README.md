# Міні CRM студентів

SPA-застосунок для роботи зі студентами.

## Опис
- Маршрути: Home, Students, AddStudent, StudentDetails, NotFound
- Стан керується через React Context + useReducer
- API-запити: GET, POST, DELETE через `fetch`
- Використовується `react-router-dom`

## Установка
1. Встановіть Node.js та npm
2. У терміналі виконайте:
   ```bash
   npm install
   ```

## Запуск
1. Запустіть `json-server` у кореневій папці:
   ```bash
   npx json-server --watch db.json --port 3001
   ```
2. Запустіть додаток:
   ```bash
   npm run dev
   ```

## Тестові дані
- Файл `db.json` містить приклад з одним студентом.

## Структура
- `src/components` — компоненти UI
- `src/pages` — сторінки маршрутизації
- `src/context` — глобальний стан студентів
