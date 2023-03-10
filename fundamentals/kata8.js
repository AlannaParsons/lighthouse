/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
Repeating Numbers
The input data for this exercise will be two dimensional array 
(an array of arrays), where each sub-array will have two numeric 
values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the 
amount of times to repeat that value.
*/

//
//expected:
//   input - 
//      data : two dimensional array (exactly 2 num per nested array)
//   output - string with each of the given values repeated seperated by comma
const repeatNumbers = function(data) {
  let temp = '';
  for (array in data){
    if (array != (data.length) && array != 0 ){
      temp += ', ';
    }
    temp += data[array][0].toString().repeat(data[array][1])
  }
  return temp;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));