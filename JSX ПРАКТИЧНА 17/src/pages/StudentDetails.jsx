import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext.jsx';

function StudentDetails() {
  const { id } = useParams();
  const { student, loading, error, fetchStudentById } = useStudentContext();

  useEffect(() => {
    fetchStudentById(id);
  }, [id]);

  if (loading) {
    return <p>Завантаження інформації...</p>;
  }

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!student) {
    return <p>Студента не знайдено.</p>;
  }

  return (
    <section className="page details-page">
      <h2>Деталі студента</h2>
      <div className="student-details">
        <p>
          <strong>Ім'я:</strong> {student.firstName}
        </p>
        <p>
          <strong>Прізвище:</strong> {student.lastName}
        </p>
        <p>
          <strong>Група:</strong> {student.group}
        </p>
        <p>
          <strong>Вік:</strong> {student.age}
        </p>
      </div>
      <Link to="/students" className="button-back">
        Повернутися до списку
      </Link>
    </section>
  );
}

export default StudentDetails;
