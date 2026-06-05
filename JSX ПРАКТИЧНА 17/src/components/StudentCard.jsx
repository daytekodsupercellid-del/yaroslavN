import { Link } from 'react-router-dom';

function StudentCard({ student, onDelete }) {
  return (
    <article className="student-card">
      <h3>{student.firstName} {student.lastName}</h3>
      <p>Група: {student.group}</p>
      <p>Вік: {student.age}</p>
      <div className="card-actions">
        <Link to={`/students/${student.id}`} className="button-details">
          Детальніше
        </Link>
        <button className="button-delete" onClick={() => onDelete(student.id)}>
          Видалити
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
