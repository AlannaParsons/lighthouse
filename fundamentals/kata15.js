/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 12 2023
-------------------------------------------------------------
Organizing Instructors
In this exercise, we will be given a list of instructors and we
will create a single object to organize them based on their course.

ex: {
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
*/

//expected:
//   input -
//      instructors : array (instructor objects)
//   output - obj (key = course. value = instructor array)
const organizeInstructors = function(instructors) {
  let organizedCourses = {};
  for (let obj of instructors){
    if (organizedCourses[obj.course]){
      organizedCourses[obj.course].push(obj.name);
    } else {
      organizedCourses[obj.course] = [obj.name];
    };
  };
  return organizedCourses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));