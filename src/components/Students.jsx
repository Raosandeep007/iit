import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNewStudent from "./AddNewStudent";
import ReadOnlyRow from "./ReadOnlyRow";
import "./styles.css";
const List = () => {
  const [students, setStudents] = useState([]);
  const [addable, setAddable] = useState(false);
  useEffect(() => {
    getStudents();
  }, []);
  const getStudents = () => {
    axios
      .get("https://gossamer-mangrove-damselfly.glitch.me/StudentsData")
      .then((res) => setStudents(res.data));
  };

  function bgColor(college) {
    if (college === "IIT Kanpur" || college === "IIT Hyderabad") {
      return "rgb(174, 232, 255)";
    }
    if (college === "IIT Bombay" || college === "IIT Roorkee") {
      return "rgba(250, 133, 250, 0.912)";
    }
    if (college === "IIT Madras" || college === "IIM Ahemedabad") {
      return "rgb(255, 255, 139)";
    }
  }

  return (
    <div>
      <h1>College Allotment System</h1>
      <h2>Students List</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Rank</th>
            <th>College Preference 1</th>
            <th>College Preference 2</th>
            <th>College Preference 3</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <ReadOnlyRow student={student} key={student.id} bgColor={bgColor} />
          ))}
        </tbody>
      </table>
      <button onClick={() => setAddable(true)}>Add new Student</button>
      {addable && (
        <AddNewStudent
          bgColor={bgColor}
          setAddable={setAddable}
          getStudents={getStudents}
        />
      )}
    </div>
  );
};

export default List;
