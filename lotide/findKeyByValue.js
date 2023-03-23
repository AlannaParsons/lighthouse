/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
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

module.exports = findKeyByValue;