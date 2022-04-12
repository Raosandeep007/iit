import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import AddNewStudent from "./AddNewStudent";
import EditRow from "./EditRow";
import ReadOnlyRow from "./ReadOnlyRow";
import Result from "./Result";
import "./styles.css";
import { ImParagraphLeft } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
const List = () => {
  const [students, setStudents] = useState([]);
  const [addable, setAddable] = useState(false);
  const [showResult, setshowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    getStudents();
    getCollege();
  }, []);
  const getStudents = () => {
    setIsLoading(true);
    axios
      .get("https://gossamer-mangrove-damselfly.glitch.me/StudentsData")
      .then((res) => setStudents(res.data))
      .then(() => setIsLoading(false))
      .catch((error) => console.error(error));
  };
  const getCollege = () => {
    axios
      .get("https://gossamer-mangrove-damselfly.glitch.me/Colleges")
      .then((res) => setColleges(res.data))
      .catch((error) => console.error(error));
  };

  function bgColor(college) {
    if (college === "IIT Kanpur" || college === "IIT Hyderabad") {
      return "rgb(174, 232, 255)";
    }
    if (college === "IIM Ahemedabad" || college === "IIT Roorkee") {
      return "rgba(250, 133, 250, 0.912)";
    }
    if (college === "IIT Madras" || college === "IIT Bombay") {
      return "rgb(255, 255, 139)";
    }
  }
  const handleEdit = (e, student) => {
    e.preventDefault();
    setEdit(student.id);
  };
  return (
    <div className="components_div">
      <h1 className="headline">College Allotment System</h1>
      <h2 className="student_list">Students List</h2>
      <table>
        <thead className="tablehead">
          <tr>
            <th className="col_name">
              <ImParagraphLeft />
              <span className="th_text">{"  "} Student Name</span>
              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <FaHashtag />
              <span className="th_text">{"  "} Rank</span>
              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <IoIosArrowDropdown />
              <span className="th_text"> College Preference 1</span>

              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <IoIosArrowDropdown />
              <span className="th_text"> College Preference 2</span>

              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <IoIosArrowDropdown />
              <span className="th_text"> College Preference 3</span>
              <RiArrowDropDownLine />
            </th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td className="loader_td">
                <div className="loader"></div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {students.map((student) => (
              <Fragment key={student.id}>
                {edit === student.id ? (
                  <EditRow
                    colleges={colleges}
                    bgColor={bgColor}
                    student={student}
                    getStudents={getStudents}
                    setEdit={setEdit}
                  />
                ) : (
                  <ReadOnlyRow
                    student={student}
                    bgColor={bgColor}
                    handleEdit={handleEdit}
                    setEdit={setEdit}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        )}
      </table>
      <div className="add_show_btn_div">
        <button className="add_result_button" onClick={() => setAddable(true)}>
          Add New Student
        </button>
        <button
          className="add_result_button"
          onClick={() => setshowResult(!showResult)}
        >
          {showResult ? "Hide Results" : "Get Results"}
        </button>
      </div>
      {showResult && (
        <Result
          students={students}
          colleges={colleges}
          bgColor={bgColor}
          RiArrowDropDownLine={RiArrowDropDownLine}
          IoIosArrowDropdown={IoIosArrowDropdown}
          ImParagraphLeft={ImParagraphLeft}
          FaHashtag={FaHashtag}
        />
      )}
      {addable && (
        <AddNewStudent
          bgColor={bgColor}
          setAddable={setAddable}
          getStudents={getStudents}
          colleges={colleges}
          IoIosArrowDropdown={IoIosArrowDropdown}
          ImParagraphLeft={ImParagraphLeft}
        />
      )}
    </div>
  );
};

export default List;
