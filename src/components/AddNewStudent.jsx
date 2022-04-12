import React, { useState } from "react";
import axios from "axios";
const AddNewStudent = ({
  setAddable,
  getStudents,
  bgColor,
  colleges,
  ImParagraphLeft,
  IoIosArrowDropdown,
}) => {
  const [newData, setnewData] = useState({
    name: "",
    rank: 0,
    college_pref_1: "",
    college_pref_2: "",
    college_pref_3: "",
  });

  const handleEntries = (e) => {
    const { name } = e.target;
    setnewData({ ...newData, [name]: e.target.value });
  };
  const addData = (e) => {
    if (
      newData.name !== "" &&
      newData.rank !== 0 &&
      newData.college_pref_1 !== "" &&
      newData.college_pref_2 !== "" &&
      newData.college_pref_3 !== ""
    ) {
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
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="addnew_div">
      <h2 className="add_new_heading">Add row</h2>
      <form action="" className="add_row" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">
          <ImParagraphLeft /> Student Name
        </label>{" "}
        <input type="text" name="name" onChange={handleEntries} required />
        <label htmlFor="rank">
          <ImParagraphLeft /> Rank
        </label>{" "}
        <input
          type="number"
          name="rank"
          placeholder="Enter Number"
          onChange={handleEntries}
          required
          min="1"
        />
        <label htmlFor="college_pref_1">
          {" "}
          <IoIosArrowDropdown /> College Preference 1
        </label>{" "}
        <select name="college_pref_1" onChange={handleEntries} required>
          <option value="College Preference 1"></option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
        <label htmlFor="college_pref_1">
          {" "}
          <IoIosArrowDropdown /> College Preference 2
        </label>{" "}
        <select name="college_pref_2" onChange={handleEntries} required>
          <option value="College Preference 2"></option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
        <label htmlFor="college_pref_1">
          {" "}
          <IoIosArrowDropdown /> College Preference 3
        </label>{" "}
        <select name="college_pref_3" onChange={handleEntries} required>
          <option value="College Preference 3"></option>
          {colleges.map((college) => (
            <option value={college.name} key={college.name}>
              {college.name}
            </option>
          ))}
        </select>
      </form>
      <div className="btn_div">
        <button className="cancel_btn" onClick={() => setAddable(false)}>
          X Cancel
        </button>
        <button
          className="save_btn"
          type="submit"
          onClick={(e) => {
            addData(e);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewStudent;
