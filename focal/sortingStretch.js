/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------

Instruction
First, write JavaScript code to sort the array numerically
(the sorted array should equal [1, 2, 5, 9, 10])
** http://www.javascriptkit.com/javatutors/arraysort.shtml

Then write a sorting function (sometimes called a custom comparator),
that sorts the above array first by the name ascending alphabetically,
and in cases where the names are equal sort by descending age.
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
*/

const array = [10, 2, 5, 1, 9];

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "zoidberg", age: 21 },
  { id: 6, name: "alex",     age: 90 },
  { id: 7, name: "alex",     age: 5 }
];

//Sort numerically and ascending:
const ascending = (a, b) => (a - b);

const objNameSort = function(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
}

const objNameAgeSort = function(a, b) {
      // Sort by name
      let compare = objNameSort(a, b);
      if (compare) {
        return compare;
      }

      // If there is a tie, sort by year
      var sortAge = a.age - b.age;
      return sortAge;
};

console.log('sorted stu: ', students.sort(objNameAgeSort));

console.log('sorted ', array.sort(ascending));