import { useStudentContext } from '../context/StudentContext.jsx';
import StudentList from '../components/StudentList.jsx';

function Students() {
  const { students, loading, error, deleteStudent } = useStudentContext();

  return (
    <section className="page students-page">
      <h2>Список студентів</h2>
      {loading && <p>Завантаження студентів...</p>}
      {error && <p className="error-text">{error}</p>}
      <StudentList students={students} onDelete={deleteStudent} />
    </section>
  );
}

export default Students;
