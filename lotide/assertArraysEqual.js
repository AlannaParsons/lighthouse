/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction

Refactor function - Mar 23 - export function

Implement assertArraysEqual which will take in two arrays and
console.log an appropriate message to the console.

continuation of assertEqual.js and eqArrays.js

If the values match, it should print (console.log) the following:
Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following:
Assertion Failed: [actual] !== [expected] (but with the values filled in)

*/

const eqArrays = require('./eqArrays');

/**
 * assertArraysEqual(arr1, arr2) - takes in two arrays for comparison
 *  console log based on a perfect match
 *
 * @param {array} arr1
 * @param {array} arr2
 * @param {boolean} expected
 * @return {undefined}
*/
const assertArraysEqual = function(arr1, arr2, expected) {

  const badEmoji = String.fromCodePoint(0x1F4A9);
  const goodEmoji = String.fromCodePoint(0x1F638);
  const goodMsg = `${goodEmoji}${goodEmoji}${goodEmoji}` +
  ` Assertion Passed: ${arr1} -- ${arr2} === ${expected}`;
  const badMsg = `${badEmoji}${badEmoji}${badEmoji}` +
  ` Assertion Failed: ${arr1} -- ${arr2} !== ${expected}`;

  console.log(eqArrays(arr1, arr2) === expected ? goodMsg : badMsg);
};

module.exports = assertArraysEqual;