import axios from "axios";
import React, { useState } from "react";
const EditRow = ({ colleges, student, setEdit, getStudents }) => {
  const [newData, setnewData] = useState(student);
  const handleEntries = (e) => {
    const { name } = e.target;
    setnewData({ ...newData, [name]: e.target.value });
  };
  const upadteData = (e) => {
    if (e.key === "Enter") {
      axios
        .patch(
          `https://gossamer-mangrove-damselfly.glitch.me/StudentsData/${student.id}`,
          newData
        )
        .then(() => {
          getStudents();
          setEdit(null);
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          value={newData.name}
          required
          onChange={handleEntries}
          className="edit_input"
          onKeyUp={(e) => {
            upadteData(e);
          }}
        />
      </td>
      <td>
        <input
          type="number"
          name="rank"
          value={newData.rank}
          required
          min="1"
          onChange={handleEntries}
          className="edit_input"
          onKeyUp={(e) => {
            upadteData(e);
          }}
        />
      </td>
      <td>
        <select
          name="college_pref_1"
          required
          value={newData.college_pref_1}
          onChange={handleEntries}
          className="edit_input"
          onKeyUp={(e) => {
            upadteData(e);
          }}
        >
          <option value="College Preference 1">College Preference 1</option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          name="college_pref_2"
          required
          value={newData.college_pref_2}
          onChange={handleEntries}
          className="edit_input"
          onKeyUp={(e) => {
            upadteData(e);
          }}
        >
          <option value="College Preference 2">College Preference 2</option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          name="college_pref_3"
          required
          value={newData.college_pref_3}
          onChange={handleEntries}
          className="edit_input"
          onKeyUp={(e) => {
            upadteData(e);
          }}
        >
          <option value="College Preference 3">College Preference 3</option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default EditRow;
