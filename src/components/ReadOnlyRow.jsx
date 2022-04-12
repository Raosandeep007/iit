import React from "react";
const ReadOnlyRow = ({ student, bgColor, handleEdit, setEdit }) => {
  return (
    <tr>
      <td
        onClick={(e) => {
          setEdit(student.id);
          handleEdit(e, student);
        }}
      >
        {student.name}
      </td>
      <td
        onClick={(e) => {
          setEdit(student.id);
          handleEdit(e, student);
        }}
      >
        {student.rank}
      </td>
      <td
        onClick={(e) => {
          setEdit(student.id);
          handleEdit(e, student);
        }}
      >
        <div
          className="college_color"
          style={{
            backgroundColor: bgColor(student.college_pref_1),
          }}
        >
          {student.college_pref_1}
        </div>
      </td>
      <td
        onClick={(e) => {
          setEdit(student.id);
          handleEdit(e, student);
        }}
      >
        <div
          className="college_color"
          style={{
            backgroundColor: bgColor(student.college_pref_2),
          }}
        >
          {student.college_pref_2}
        </div>
      </td>
      <td
        onClick={(e) => {
          setEdit(student.id);
          handleEdit(e, student);
        }}
      >
        <div
          className="college_color"
          style={{
            backgroundColor: bgColor(student.college_pref_3),
          }}
        >
          {student.college_pref_3}
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
