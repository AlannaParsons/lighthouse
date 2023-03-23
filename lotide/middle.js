/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction
Refactor function - Mar 23 - export function

The middle function should return an array with only the middle
element(s) of the provided array. This means that the length of
the returned elements could vary.

For arrays with one or two elements, there is no middle.
Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []
For arrays with odd number of elements, an array containing a
single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
For arrays with an even number of elements, an array containing
the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

*/

/**
 * middle(arr) - take in an array and return the middle-most element(s)
 *
 * @param {array} arr - array of numbers
 * @return {array}
*/
const middle = function(arr) {
  const len = arr.length;
  let middle = [];

  if (len > 2) {
    if (len % 2 === 0) {
      middle.push(arr[len / 2 - 1], arr[len / 2]);
    } else {
      middle.push(arr[Math.floor(len / 2)]);
    }
  }
  return middle;
};

module.exports = middle;