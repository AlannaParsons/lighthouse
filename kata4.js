/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 9 2023
-------------------------------------------------------------
Instructors Name
In this exercise, we will be given a list of instructors and have 
to determine which instructor has the longest name.

const instructorWithLongestName = function(instructors) {
  // Put your solution here
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
*/


//
//expected:
//   input - 
//          data : array of objects
//   output - single object w longest name value
function instructorWithLongestName(instructors) {
  let longestName =   {name: "", course: ""};
  for (let courses of instructors){
    longestName = (courses.name.length > longestName.name.length) ? courses : longestName;
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));