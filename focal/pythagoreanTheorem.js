/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------

Instruction
The result should be an array of numbers corresponding to the x-y
pairs provided in the input array (ie: calculate z given x and y).

Pythagorean Theorem:
z^2 = x^2 + y^2.

*/

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map( nums => Math.sqrt(Math.pow(nums.x, 2) + Math.pow(nums.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);