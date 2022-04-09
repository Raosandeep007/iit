import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
const List = () => {
  const [students, setStudents] = useState([]);
  const [newData, setnewData] = useState({
    name: "",
    rank: 0,
    college_pref_1: "",
    college_pref_2: "",
    college_pref_3: "",
  });
  const [addable, setAddable] = useState(false);
  useEffect(() => {
    getStudents();
  }, []);
  const getStudents = () => {
    axios
      .get("https://gossamer-mangrove-damselfly.glitch.me/StudentsData")
      .then((res) => setStudents(res.data));
  };
  const handleEntries = (e) => {
    const { name } = e.target;
    setnewData({ ...newData, [name]: e.target.value });
  };
  const addData = (e) => {
    e.preventDefault();
    // console.log(newData);
    axios
      .post(
        "https://gossamer-mangrove-damselfly.glitch.me/StudentsData",
        newData
      )
      .then((res) => getStudents)
      .catch((error) => console.log(error));
  };
  function getBackgroundColor(college) {
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
  let Colleges = [
    { name: "IIT Madras", noOfSeats: 4 },
    { name: "IIT Kanpur", noOfSeats: 2 },
    { name: "IIT Bombay", noOfSeats: 1 },
    { name: "IIT Hyderabad", noOfSeats: 3 },
    { name: "IIT Roorkee", noOfSeats: 1 },
    { name: "IIM Ahemedabad", noOfSeats: 2 },
  ];
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
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rank}</td>
              <td
                style={{
                  backgroundColor: getBackgroundColor(student.college_pref_1),
                }}
              >
                {student.college_pref_1}
              </td>
              <td
                style={{
                  backgroundColor: getBackgroundColor(student.college_pref_2),
                }}
              >
                {student.college_pref_2}
              </td>
              <td
                style={{
                  backgroundColor: getBackgroundColor(student.college_pref_3),
                }}
              >
                {student.college_pref_3}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setAddable(true)}>Add new Student</button>
      {addable ? (
        <div>
          <h2>Add row</h2>
          <form action="" className="add_row">
            <input type="text" name="name" onChange={handleEntries} />
            <input type="number" name="rank" onChange={handleEntries} min="1" />
            <select name="college_pref_1" onChange={handleEntries}>
              <option value="College Preference 1">College Preference 1</option>
              {Colleges.map((college) => (
                <option
                  value={college.name}
                  style={{
                    backgroundColor: getBackgroundColor(college.name),
                  }}
                  key={college.name}
                >
                  {college.name}
                </option>
              ))}
            </select>
            <select name="college_pref_2" onChange={handleEntries}>
              <option value="College Preference 2">College Preference 2</option>
              {Colleges.map((college) => (
                <option
                  value={college.name}
                  style={{
                    backgroundColor: getBackgroundColor(college.name),
                  }}
                  key={college.name}
                >
                  {college.name}
                </option>
              ))}
            </select>
            <select name="college_pref_3" onChange={handleEntries}>
              <option value="College Preference 3">College Preference 3</option>
              {Colleges.map((college) => (
                <option
                  value={college.name}
                  style={{
                    backgroundColor: getBackgroundColor(college.name),
                  }}
                  key={college.name}
                >
                  {college.name}
                </option>
              ))}
            </select>
          </form>
          <button onClick={() => setAddable(false)}>X Cancel</button>
          <button
            type="submit"
            onClick={(e) => {
              addData(e);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;
