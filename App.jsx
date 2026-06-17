import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "Computer Science",
      marks: 85,
    },
    {
      id: 2,
      name: "Anita Verma",
      course: "Information Technology",
      marks: 92,
    },
    {
      id: 3,
      name: "Rohan Gupta",
      course: "Electronics",
      marks: 78,
    },
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;