/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction
Create a function flatten which will take in an array containing
elements including nested arrays of elements, and return a "flattened"
version of the array.

The lodash implementation can handle seemingly unlimited levels of
"nested" arrays (arrays containing arrays containing arrays containing
  ... you get the point). Our function however, will for now be much
  simpler and only handle one level of nesting.

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
*/

/**
 * flatten(arr) - take in array containing elements including nested
 * arrays of elements, and return a "flattened" version of the array.
 *
 * @param {array} arr - dimensional array
 * @return {array} - flat array
*/
const flatten = function(arr) {
  let flat = [];
  for (let item of arr) {
    // will eventually change to recursion
    if (Array.isArray(item)) {
      for (let nested of item) {
        flat.push(nested);
      }
    } else {
      flat.push(item);
    }
  }
  return flat;
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

  //console.log(eqArrays(arr1, arr2),'1:',arr1, '   2:',arr2);

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
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true); // => should PASS
