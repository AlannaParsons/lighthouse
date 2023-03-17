/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 13 2023
-------------------------------------------------------------
Instruction

*/

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));