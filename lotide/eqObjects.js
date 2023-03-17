/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 16 2023
-------------------------------------------------------------
Instruction

Implement the definition for function eqObjArr which will take
in two objects and returns true or false, based on a perfect match.

In this simple scenario, two objects are equal when:

They have the same number of keys
The value for each key in one object is the same as the value for
  that same key in the other object

*/

// ACTUAL FUNCTION
/**
 * eqObjArr(item1, item2) - Returns true if both objects/arrays have
 * identical keys with identical values
 *
 * currently handles arrays as values but not objects as values
 *
 * @param {object|array} item1
 * @param {object|array} item2
 * @return {boolean}
*/

const eqObjArr = function(item1, item2) {
  let nestedState;

  for (let key in item1) {
    //will catch object and array types
    if (typeof item1[key] === "object" && typeof item2[key] === "object") {
      if (!eqArrays(Object.keys(item1[key]), Object.keys(item2[key]))) {
        return false;

      } else {
        nestedState = eqObjArr(item1[key], item2[key]);
        if (!nestedState) return false
      }
    } else if (item1[key] !== item2[key] || Object.keys(item1).length !== Object.keys(item2).length) {
      return false;
    }
  }
  return true;
}

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
      //console.log('no match:',arr1[i],arr2[i]);
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjArr(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjArr(shirtObject , longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjArr(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjArr(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);


//TESTS!!
assertEqual(eqObjArr({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false);
assertEqual(eqObjArr({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjArr({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjArr([1, 2, 3, 4, 5],[1, 2, 3, 4, 5]), true); //	15
assertEqual(eqObjArr([1, 2, 8, 4, 5],[1, 2, 3, 4, 5]), false); //	15
assertEqual(eqObjArr([1, 2, 3, 4, 5],[1, 2, 3, 4, 5, 6]), false); //	15
assertEqual(eqObjArr([[1, 2, [[3], 4]], 5, []],[[1, 2, [[3], 4]], 5, []]), true);
assertEqual(eqObjArr([[1, 2, [[3], 4]], 5, []],[[1, 2, [[], 4]], 5, []]), false);
assertEqual(eqObjArr([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 0]], 5, []]), false);
assertEqual(eqObjArr([[1, 2, [[3], 4]], 5, []],[[1, 2, [[3], 4]], []]), false);
assertEqual(eqObjArr([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]), true);
assertEqual(eqObjArr([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[], 1]]]]]]]]]]]]), false);
assertEqual(eqObjArr([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqObjArr([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqObjArr([[2, 3], [4]], [[2, 3], 4]), false) // => false
