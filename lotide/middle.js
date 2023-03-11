/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

The middle function should return an array with only the middle
element(s) of the provided array. This means that the length of
the returned elements could vary.

For arrays with one or two elements, there is no middle.
Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []
For arrays with odd number of elements, an array containing a
single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
For arrays with an even number of elements, an array containing
the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

*/


// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
/**
 * middle(arr) - take in an array and return the middle-most element(s)
 *
 * @param {array} arr - array of numbers
 * @return {array}
*/
const middle = function(arr) {
  const len = arr.length;
  let middle = [];

  if (len > 2) {
    if (len % 2 === 0) {
      middle.push(arr[len / 2 - 1], arr[len / 2]);
    } else {
      middle.push(arr[Math.floor(len / 2)]);
    }
  }
  return middle;
};

// TEST CODE
assertArraysEqual(middle([1]), [], true);
assertArraysEqual(middle([1, 2]), [], true);
assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);
