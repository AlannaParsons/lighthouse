/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

We'll implement a new function letterPositions which will return
all the indices (zero-based positions) in the string where each
character is found.

For each letter, instead of returning just one number to represent
its number of occurrences, multiple numbers may be needed to represent
all the places in the string that it shows up.

Keep in mind that we are supposed to skip spaces. (do not add spaces to dict
   and do not strip spaces, should still be at org indicies)

("lighthouse in the house")

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

// ACTUAL FUNCTION
/**
 * letterPositions(sentence) - return all the indices (zero-based positions)
 * in the string where each character is found.
 *
 * @param {string} sentence
 * @return {object} - keys:chars values:array of indicies of chars in sentence
*/
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i <= sentence.length - 1; i++) {
    // if item exists in obj, add to array, otherwise create array as value
    if (Object.prototype.hasOwnProperty.call(results, sentence[i])) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
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

// TESTS
assertArraysEqual(letterPositions("hello").e, [1], true);
assertArraysEqual(letterPositions("hello").l, [2, 3], true);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18], true);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22], true);
