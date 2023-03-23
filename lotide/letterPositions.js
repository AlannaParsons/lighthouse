/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction
Refactor function - Mar 23 - export function

We'll implement a new function letterPositions which will return
all the indices (zero-based positions) in the string where each
character is found.

For each letter, instead of returning just one number to represent
its number of occurrences, multiple numbers may be needed to represent
all the places in the string that it shows up.

Keep in mind that we are supposed to skip spaces. (do not add spaces to dict
   and do not strip spaces, should still be at org indicies)

("lighthouse in the house")

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

/**
 * letterPositions(sentence) - return all the indices (zero-based positions)
 * in the string where each character is found.
 *
 * @param {string} sentence
 * @return {object} - keys:chars values:array of indicies of chars in sentence
*/
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i <= sentence.length - 1; i++) {
    // if item exists in obj, add to array, otherwise create array as value
    if (Object.prototype.hasOwnProperty.call(results, sentence[i])) {
      results[sentence[i]].push(i);
    } else if (sentence[i] !== ' ') {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;