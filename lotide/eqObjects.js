/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

Implement the definition for function eqObjects which will take
in two objects and returns true or false, based on a perfect match.

In this simple scenario, two objects are equal when:

They have the same number of keys
The value for each key in one object is the same as the value for
  that same key in the other object

*/

// ACTUAL FUNCTION
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

/**
 * assertEqual(actual, expected)
 *
 * @param {(string|number)} actual - A string param
 * @param {(string|number)} expected - A string param
 * @return {undefined}
*/
const assertEqual = function(actual, expected) {
  const badEmoji = String.fromCodePoint(0x1F4A9);
  const goodEmoji = String.fromCodePoint(0x1F638);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}` +
    ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}` +
    ` Assertion Failed: ${actual} !== ${expected}`);
  }
};


//TEST
/*
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
*/
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);