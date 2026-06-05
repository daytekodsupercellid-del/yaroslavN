import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const TaskList = () => {
  // Отримання state через useContext
  const { tasks, tasksDispatch } = useContext(AppContext);
  const [input, setInput] = useState('');

  // Функція для додавання задачі
  const handleAddTask = () => {
    if (input.trim()) {
      tasksDispatch({ type: 'ADD_TASK', payload: input });
      setInput('');
    }
  };

  // Функція для видалення задачі
  const handleDeleteTask = (id) => {
    tasksDispatch({ type: 'DELETE_TASK', payload: id });
  };

  // Функція для перемикання стану задачі
  const handleToggleTask = (id) => {
    tasksDispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <div style={styles.container}>
      <h2>Список задач</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          placeholder="Введіть нову задачу..."
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Додати
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.length === 0 ? (
          <li style={styles.emptyMessage}>Немає задач</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} style={styles.taskItem}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                style={styles.checkbox}
              />
              <span
                style={{
                  ...styles.taskText,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  opacity: task.completed ? 0.6 : 1,
                }}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={styles.deleteButton}
              >
                Видалити
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #28a745',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '20px auto',
    backgroundColor: '#f8f9fa',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  },
  taskText: {
    flex: 1,
    fontSize: '16px',
  },
  deleteButton: {
    padding: '5px 15px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#999',
    padding: '20px',
    fontSize: '16px',
  },
};

export default TaskList;
