/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 6 2023
-------------------------------------------------------------
For this kata, we'll be adding only the numbers in the array 
which match the given condition.

const conditionalSum = function(values, condition) {
  // Your code here
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/


//
//expected:
//   input - 
//          values : array of nums
//          condition : "odd" or "even" string
//   output - sum values dependatant on conditionional arg
//  
function conditionalSum(values, condition) {
  let sum = 0;
  let parity = (condition === 'even') ? 0 : 1;
  for (num of values){
    if (num % 2 === parity){
      sum += num;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));