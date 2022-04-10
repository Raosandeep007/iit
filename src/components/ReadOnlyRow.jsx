import React from "react";

const ReadOnlyRow = ({ student, bgColor }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.rank}</td>
      <td
        style={{
          backgroundColor: bgColor(student.college_pref_1),
        }}
      >
        {student.college_pref_1}
      </td>
      <td
        style={{
          backgroundColor: bgColor(student.college_pref_2),
        }}
      >
        {student.college_pref_2}
      </td>
      <td
        style={{
          backgroundColor: bgColor(student.college_pref_3),
        }}
      >
        {student.college_pref_3}
      </td>
      <td></td>
    </tr>
  );
};

export default ReadOnlyRow;
