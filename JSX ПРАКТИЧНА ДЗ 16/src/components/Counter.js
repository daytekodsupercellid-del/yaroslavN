import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Counter = () => {
  // Отримання state через useContext
  const { counter, counterDispatch } = useContext(AppContext);

  return (
    <div style={styles.container}>
      <h2>Лічильник</h2>
      <p style={styles.counter}>{counter}</p>
      <div style={styles.buttonGroup}>
        <button
          onClick={() => counterDispatch({ type: 'INCREMENT' })}
          style={styles.button}
        >
          +
        </button>
        <button
          onClick={() => counterDispatch({ type: 'DECREMENT' })}
          style={styles.button}
        >
          -
        </button>
        <button
          onClick={() => counterDispatch({ type: 'RESET' })}
          style={styles.resetButton}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid #007bff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '20px auto',
    backgroundColor: '#f8f9fa',
  },
  counter: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#007bff',
    margin: '20px 0',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Counter;
