# Практична робота 16: useReducer та Context API

## Опис проекту

Цей проект демонструє використання React hooks `useReducer` та `Context API` для управління глобальним state.

## Функціональність

### 1. Лічильник (Counter)
- **Increment (+)** - збільшує лічильник на 1
- **Decrement (-)** - зменшує лічильник на 1
- **Reset** - скидає лічильник на 0

### 2. Список задач (Task List)
- **Додавання задачі** - введіть текст і натисніть "Додати" або Enter
- **Видалення задачі** - натисніть кнопку "Видалити"
- **Перемикання стану** - відмітьте/розміткуйте чекбокс для позначення виконаної задачі

## Структура проекту

```
src/
├── components/
│   ├── Counter.js        # Компонент лічильника
│   └── TaskList.js       # Компонент списку задач
├── context/
│   └── AppContext.js     # Контекст та Provider для глобального state
├── reducers/
│   ├── counterReducer.js # Reducer для лічильника
│   └── tasksReducer.js   # Reducer для списку задач
├── App.js                # Головний компонент
└── index.js              # Точка входу
```

## Ключові концепції

### useReducer
Використовується для управління складним state:
- `counterReducer` - обробляє INCREMENT, DECREMENT, RESET
- `tasksReducer` - обробляє ADD_TASK, DELETE_TASK, TOGGLE_TASK

### Context API
- `AppContext` - контекст для поширення state
- `AppProvider` - компонент-провайдер, який оборудає додаток
- `useContext` - hook для отримання state в компонентах

## Запуск проекту

1. Встановіть залежності:
   ```bash
   npm install
   ```

2. Запустіть проект у режимі розробки:
   ```bash
   npm start
   ```

3. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері

## Файли

- **counterReducer.js** - Reducer для управління лічильником
- **tasksReducer.js** - Reducer для управління списком задач
- **AppContext.js** - Створення контексту та провайдера
- **Counter.js** - Компонент з useContext для отримання state лічильника
- **TaskList.js** - Компонент з useContext для отримання state задач
- **App.js** - Головний компонент додатку
- **index.js** - Точка входу з AppProvider
