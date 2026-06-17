function StudentCard({ name, course, marks }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>
        <strong>Marks:</strong> {marks}
      </p>
    </div>
  );
}

export default StudentCard;