/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Create a function tail which returns the "tail" of an array:
  everything except for the first item (head) of the provided array.

Refactor function - Mar 23 - export function

Your function should not modify the array that is passed in.
It should return a new array.
*/

/**
 * tail(array)
 *
 * @param {array} array
 * @return {array} 1st item removed
*/
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
