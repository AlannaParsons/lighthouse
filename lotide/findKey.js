/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------

Instruction
Implement the function findKey which takes in an object and a
callback. It should scan the object and return the first key for
which the callback returns a truthy value. If no key is found,
then it should return undefined.
*/

/**
 * findKey(obj, callback) - scan object, return first key for
 * which the callback returns truthy value, else undefined
 *
 * @param {object} obj
 * @param {function} callback
 * @return {string|undefined}
*/
const findKey = function(obj, callback) {
  for (nameKey in obj) {
    if (callback(obj[nameKey])) {
      return nameKey
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result);