import StudentCard from './StudentCard.jsx';

function StudentList({ students, onDelete }) {
  if (!students.length) {
    return <p>Список студентів порожній. Додайте першого студента.</p>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default StudentList;
