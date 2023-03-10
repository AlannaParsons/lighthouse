/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
Multiplication Table
We will be given a number as our input data. This number is the 
highest value of our multiplication table. Our job is to generate 
a multiplication table for the values from 1 to the provided number.

example:
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25 

*/

//
//expected:
//   input - 
//      maxValue : highest value of multiplication table
//   output - string that is square mulitplication table
function multiplicationTable(maxValue) {
  table = '';
  for (let x = 1; x <= maxValue ;x++){
    for (let y = 1; y <= maxValue ;y++){
      table += (x*y).toString() + ' ';
    }
    table += '\n';
  }
  return table
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));