/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 3 2023
-------------------------------------------------------------
Instruction

 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

/**
 * joinList(numbers)
 *
 * @param {array} words
 * @return {string} words from array -> string
*/
const joinList = function(words) {
  arrStr = '';
  for (word of words) {
    arrStr += (word === words[words.length - 1]) ? word : word + ', ';
  }
  return arrStr;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);