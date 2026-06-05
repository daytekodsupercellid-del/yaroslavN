import { createContext, useContext, useEffect, useReducer } from 'react';

const StudentContext = createContext(null);
const API_URL = 'http://localhost:3001/students';

const initialState = {
  students: [],
  student: null,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, students: action.payload, error: null };
    case 'FETCH_SINGLE_SUCCESS':
      return { ...state, loading: false, student: action.payload, error: null };
    case 'ADD_SUCCESS':
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload],
        error: null,
      };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loading: false,
        students: state.students.filter((item) => item.id !== action.payload),
        error: null,
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Не вдалося завантажити студентів');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  async function fetchStudentById(id) {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error('Студента не знайдено');
      const data = await response.json();
      dispatch({ type: 'FETCH_SINGLE_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  async function addStudent(studentData) {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      });
      if (!response.ok) throw new Error('Не вдалося додати студента');
      const savedStudent = await response.json();
      dispatch({ type: 'ADD_SUCCESS', payload: savedStudent });
      return true;
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
      return false;
    }
  }

  async function deleteStudent(id) {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Не вдалося видалити студента');
      dispatch({ type: 'DELETE_SUCCESS', payload: id });
      return true;
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
      return false;
    }
  }

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        student: state.student,
        loading: state.loading,
        error: state.error,
        fetchStudents,
        fetchStudentById,
        addStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  const context = useContext(StudentContext);
  if (!context) throw new Error('useStudentContext must be used within StudentProvider');
  return context;
}
