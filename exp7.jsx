import React from "react";
import "exp8.css";

const students = [
  {
    name: "Rahul Sharma",
    course: "Computer Science",
    marks: 85,
  },
  {
    name: "Anita Verma",
    course: "Information Technology",
    marks: 82,
  },
  {
    name: "Rohan Gupta",
    course: "Electronics",
    marks: 78,
  },
];

function App() {
  return (
    <div className="container">
      <h2>Student Information</h2>

      {students.map((student, index) => (
        <div className="card" key={index}>
          <h3>{student.name}</h3>
          <p>Course: {student.course}</p>
          <p>Marks: {student.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default App;