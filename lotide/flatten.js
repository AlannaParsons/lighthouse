/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction
Refactor function - Mar 23 - export function

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

module.exports = flatten;
