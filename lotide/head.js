/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Create a function head which returns the first item in the array.

The head function should not return the first element as an array.
It should simply return the element itself.

Refactor function - Mar 23 - export function
*/

/**
 * head(array)
 *
 * @param {array} array
 * @return {string} 1st item of array
*/
const head = function(array) {
  return array[0];
};

module.exports = head;