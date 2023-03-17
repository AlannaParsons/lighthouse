/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 13 2023
-------------------------------------------------------------
Instruction

Make sum a recursive function that sums all the whole numbers from
fromN to toN.

So if we called the function with the following values: sum(3, 7),
it would sum 3 + 4 + 5 + 6 + 7 and output 25.

For this exercise, we can safely assume that fromN will always be less
than or equal to toN.
*/

function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN

  }
  console.log(toN);
  return toN + sum(fromN, toN - 1);



}

console.log(sum(3, 7));

module.exports = sum;
