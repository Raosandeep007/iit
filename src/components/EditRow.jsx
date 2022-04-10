import React from "react";

const EditRow = () => {
  return (
    <tr>
      <td>
        <input type="text" name="name" required />
      </td>
      <td>
        <input type="number" name="rank" required min="1" />
      </td>
      <td>
        <select name="college_pref_1" required>
          <option value="College Preference 1">College Preference 1</option>
          {Colleges.map((college) => (
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
      </td>
      <td>
        {" "}
        <select name="college_pref_2" required>
          <option value="College Preference 2">College Preference 2</option>
          {Colleges.map((college) => (
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
      </td>
      <td>
        <select name="college_pref_3" required>
          <option value="College Preference 3">College Preference 3</option>
          {Colleges.map((college) => (
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
      </td>
    </tr>
  );
};

export default EditRow;
