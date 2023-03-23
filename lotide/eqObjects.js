/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 16 2023
-------------------------------------------------------------
Instruction
Refactor function - Mar 23 - export function

Implement the definition for function eqObjArr which will take
in two objects and returns true or false, based on a perfect match.

In this simple scenario, two objects are equal when:

They have the same number of keys
The value for each key in one object is the same as the value for
  that same key in the other object

*/

const eqArrays = require('./eqArrays');

/**
 * eqObjects(item1, item2) - Returns true if both objects/arrays have
 * identical keys with identical values
 *
 * currently handles arrays as values but not objects as values
 *
 * @param {object|array} item1
 * @param {object|array} item2
 * @return {boolean}
*/
const eqObjects = function(item1, item2) {
  let nestedState;

  for (let key in item1) {
    //will catch object and array types
    if (typeof item1[key] === "object" && typeof item2[key] === "object") {
      if (!eqArrays(Object.keys(item1[key]), Object.keys(item2[key]))) {
        return false;

      } else {
        nestedState = eqObjects(item1[key], item2[key]);
        if (!nestedState) return false
      }
    } else if (item1[key] !== item2[key] || Object.keys(item1).length !== Object.keys(item2).length) {
      return false;
    }
  }
  return true;
}

module.exports = eqObjects;


