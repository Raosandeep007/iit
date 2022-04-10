import React, { useState } from "react";
import axios from "axios";
const AddNewStudent = ({ setAddable, getStudents, bgColor }) => {
  const [colleges, setColleges] = useState([]);
  const [newData, setnewData] = useState({
    name: "",
    rank: 0,
    college_pref_1: "",
    college_pref_2: "",
    college_pref_3: "",
  });
  useState(() => {
    getColleges();
  }, []);
  function getColleges() {
    axios
      .get("https://gossamer-mangrove-damselfly.glitch.me/Colleges")
      .then((res) => setColleges(res.data))
      .catch((error) => console.error(error));
  }
  const handleEntries = (e) => {
    const { name } = e.target;
    setnewData({ ...newData, [name]: e.target.value });
  };
  const addData = (e) => {
    axios
      .post(
        "https://gossamer-mangrove-damselfly.glitch.me/StudentsData",
        newData
      )
      .then(
        (res) => getStudents(),
        setnewData({
          name: "",
          rank: 0,
          college_pref_1: "",
          college_pref_2: "",
          college_pref_3: "",
        })
      )
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2>Add row</h2>
      <form action="" className="add_row" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" onChange={handleEntries} required />
        <input
          type="number"
          name="rank"
          onChange={handleEntries}
          required
          min="1"
        />
        <select name="college_pref_1" onChange={handleEntries} required>
          <option value="College Preference 1">College Preference 1</option>
          {colleges.map((college) => (
            <option
              value={college.name}
              style={{
                backgroundColor: bgColor(college.name),
              }}
              key={college.name}
            >
              {college.name}
            </option>
          ))}
        </select>
        <select name="college_pref_2" onChange={handleEntries} required>
          <option value="College Preference 2">College Preference 2</option>
          {colleges.map((college) => (
            <option
              value={college.name}
              style={{
                backgroundColor: bgColor(college.name),
              }}
              key={college.name}
            >
              {college.name}
            </option>
          ))}
        </select>
        <select name="college_pref_3" onChange={handleEntries} required>
          <option value="College Preference 3">College Preference 3</option>
          {colleges.map((college) => (
            <option
              value={college.name}
              style={{
                backgroundColor: bgColor(college.name),
              }}
              key={college.name}
            >
              {college.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          onClick={(e) => {
            addData(e);
          }}
        >
          Save
        </button>
      </form>
      <button onClick={() => setAddable(false)}>X Cancel</button>
    </div>
  );
};

export default AddNewStudent;
