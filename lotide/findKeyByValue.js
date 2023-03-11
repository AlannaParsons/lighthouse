/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

Instruction
Implement the function findKeyByValue which takes in an object
and a value. It should scan the object and return the first key
which contains the given value. If no key with that given value is
found, then it should return undefined.
*/

// ACTUAL FUNCTION
/**
 * findKeyByValue(str) - report back if given value exists as value in obj
 * (does not expect arrays as values in object)
 *
 * @param {object} obj
 * @param {string|number} val - to be found in obj
 * @return {object|undefined} - key from where value exists (if it exists)
*/
const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
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
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);