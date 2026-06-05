import React from 'react';
import Counter from './components/Counter';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Практична робота 16: useReducer та Context API</h1>
      </header>
      <main style={styles.main}>
        <Counter />
        <TaskList />
      </main>
    </div>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  main: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
  },
};

export default App;
