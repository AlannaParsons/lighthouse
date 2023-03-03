/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction


Open min.js in VSCode, read all the code you've got to work with,
and implement the min function so that it returns the smallest
value in numbers.

Warning
JavaScript has a Math.min function available which already does
this for us. This means that you can not use it in this exercise.

*/

/**
 * min(numbers) - returns the smallest value in numbers
 *
 * @param {array} numbers
 * @return {number}
*/
const min = function(numbers) {
  let lowest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    lowest = (numbers[i] < lowest) ? numbers[i] : lowest;
  }
  return lowest;
};


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);