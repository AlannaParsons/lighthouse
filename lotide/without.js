/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction

Implement without, will return a subset of a given array,
removing unwanted elements.

This function should take in a source array and a itemsToRemove
array. It should return a new array with only those elements
from source that are not present in the itemsToRemove array.

It's okay for without to not function correctly when using
nested arrays or arrays of objects.

make sure that the original array is not modified

examples:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

*/

/**
 * without(org, rmv) - will return a subset of a given array,
 * removing unwanted elements
 *
 * @param {array} org - org array, to be unchanged
 * @param {array} rmv - elems to be removed from org
 * @return {array} - new array w rmv elements removed from org
*/
const without = function(org, rmv) {
  let temp = [];
  for (let i = 0; i < org.length; i++) {
    if (!(rmv.includes(org[i]))) {
      temp.push(org[i]);
    }
  }
  return temp;
};

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3], true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true);
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3], true);
assertArraysEqual(without([1, 2, 3], [1]), [2, 4], false);