import { useStudentContext } from '../context/StudentContext.jsx';
import StudentForm from '../components/StudentForm.jsx';

function AddStudent() {
  const { addStudent, loading, error } = useStudentContext();

  return (
    <section className="page add-page">
      <h2>Додати нового студента</h2>
      {loading && <p>Обробка даних...</p>}
      {error && <p className="error-text">{error}</p>}
      <StudentForm onSubmit={addStudent} />
    </section>
  );
}

export default AddStudent;
