export default function allotment(students, colleges) {
  const studentsCopy = JSON.parse(JSON.stringify(students));
  const collegesCopy = JSON.parse(JSON.stringify(colleges));
  let college_allotment_list = [];
  for (let i = 0; i < studentsCopy.length; i++) {
    let student = studentsCopy[i];
    let college_allotment = {};
    let college_pref_1_index = collegesCopy.findIndex(
      (college) => college.name === student.college_pref_1
    );
    let college_pref_2_index = collegesCopy.findIndex(
      (college) => college.name === student.college_pref_2
    );
    let college_pref_3_index = collegesCopy.findIndex(
      (college) => college.name === student.college_pref_3
    );
    if (collegesCopy[college_pref_1_index].noOfSeats > 0) {
      collegesCopy[college_pref_1_index].noOfSeats =
        collegesCopy[college_pref_1_index].noOfSeats - 1;
      college_allotment.name = student.name;
      college_allotment.college = student.college_pref_1;
      college_allotment.rank = student.rank;
      college_allotment.id = Math.random();
      college_allotment_list.push(college_allotment);
    } else if (collegesCopy[college_pref_2_index].noOfSeats > 0) {
      collegesCopy[college_pref_2_index].noOfSeats =
        collegesCopy[college_pref_2_index].noOfSeats - 1;
      college_allotment.name = student.name;
      college_allotment.college = student.college_pref_2;
      college_allotment.rank = student.rank;
      college_allotment.id = Math.random();
      college_allotment_list.push(college_allotment);
    } else if (collegesCopy[college_pref_3_index].noOfSeats > 0) {
      collegesCopy[college_pref_3_index].noOfSeats =
        collegesCopy[college_pref_3_index].noOfSeats - 1;
      college_allotment.name = student.name;
      college_allotment.college = student.college_pref_3;
      college_allotment.rank = student.rank;
      college_allotment.id = Math.random();
      college_allotment_list.push(college_allotment);
    } else {
      college_allotment.name = student.name;
      college_allotment.college = "Not Alloted";
      college_allotment.rank = student.rank;
      college_allotment.id = Math.random();
      college_allotment_list.push(college_allotment);
    }
  }
  return college_allotment_list;
}
