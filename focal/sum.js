/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Feb 27 2023
-------------------------------------------------------------
Instruction
Your code should extract the two remaining items in process.argv,
add them together, then log the result to the console.
*/

'use strict';

const args = process.argv;
let sum = 0;

for (let i = 2; i < args.length; i++) {
  if (Number(args[i])) {
    sum += Number(args[i]);
  }
  else {
    console.log('nan');
  }
}

console.log(sum);