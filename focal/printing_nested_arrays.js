/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 13 2023
-------------------------------------------------------------
Instruction

*/

const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  }
}

//const array = ["A", "B", "C", "D", "E"];
//const array = ["A", ["B", "C"], "D", "E"];
const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];

printItems(array);