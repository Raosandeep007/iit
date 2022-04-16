import React, { useState, useEffect } from "react";
import allotment from "./AllotmentCal";
const Result = ({
  students,
  colleges,
  bgColor,
  ImParagraphLeft,
  IoIosArrowDropdown,
  RiArrowDropDownLine,
  FaHashtag,
}) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(allotment(students, colleges));
  }, []);

  return (
    <div className="result_div">
      <h1 className="headline">Results</h1>
      <table>
        <thead className="tablehead">
          <tr>
            <th className="col_name">
              <ImParagraphLeft />
              <span className="th_text"> Student Name</span>
              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <FaHashtag />
              <span className="th_text">Rank</span>
              <RiArrowDropDownLine />
            </th>
            <th className="col_name">
              <IoIosArrowDropdown />
              <span className="th_text"> Alloted College</span>

              <RiArrowDropDownLine />
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((allotment) => (
            <tr key={allotment.id}>
              <td>{allotment.name}</td>
              <td>{allotment.rank}</td>
              <td>
                <div
                  className="result_college_color"
                  style={{
                    backgroundColor: bgColor(allotment.college),
                  }}
                >
                  {allotment.college}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
