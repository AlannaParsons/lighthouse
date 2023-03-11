/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

Implement assertObjectsEqual which will take in two objects and
console.log an appropriate message to the console.

*/

/**
 * assertObjectsEqual(actual, expected) - take in two objects and
 * console.log an appropriate message to the console.
 *
 * @param {object} actual
 * @param {object} expected
 * @return {undefined}
*/
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const badEmoji = String.fromCodePoint(0x1F4A9);
  const goodEmoji = String.fromCodePoint(0x1F638);
  const goodMsg = `${goodEmoji}${goodEmoji}${goodEmoji}` +
  ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const badMsg = `${badEmoji}${badEmoji}${badEmoji}` +
  ` Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log(eqObjects(actual, expected) ? goodMsg : badMsg);

};

/**
 * eqObjects(object1, object2) - Returns true if both objects have
 * identical keys with identical values
 *
 * currently handles arrays as values but not objects as values
 *
 * @param {object} object1
 * @param {object} object2
 * @return {boolean}
*/
const eqObjects = function(object1, object2) {
  //check length comparison
  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false;
  }
  for (let key in object1) {
    //check vals for arrays & do necessary compare
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

//TEST
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);