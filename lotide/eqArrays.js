/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction
Implement a function eqArrays which takes in two arrays and
returns true or false, based on a perfect match.

Refactor function - Mar 23 - export function

*/

/**
 * eqArrays(arr1, arr2) - takes in two arrays returns true or false
 *  based on a perfect match
 *
 * @param {array} arr1
 * @param {array} arr2
 * @return {boolean}
*/
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
