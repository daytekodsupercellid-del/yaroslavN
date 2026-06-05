import React, { createContext, useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';
import { tasksReducer } from '../reducers/tasksReducer';

// Створення контексту для глобального state
export const AppContext = createContext();

// Provider компонент для передачі state через контекст
export const AppProvider = ({ children }) => {
  // useReducer для лічильника
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  // useReducer для списку задач
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  // Значення, що передається через контекст
  const value = {
    counter,
    counterDispatch,
    tasks,
    tasksDispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
