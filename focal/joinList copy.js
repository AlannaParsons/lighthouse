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
 * 
 * 
 * Having learned about arrays, we can make a short list of the concepts 
 * we've learned recently.

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(conceptList);
But the output of this code in the Terminal is not very easy to read.

node concepts.js
['gists', 'types', 'operators', 'iteration', 'problem solving']
It could certainly be more human readable! So we decide to write a small algorithm for joining the strings in conceptList together, separated by commas, such that the final output looks like the following.
 */

/**
 * joinList(numbers)
 *
 * @param {array} words
 * @return {string} words from array -> string
*/
const joinList = function(words) {
  let arrStr = '';
  for (let word of words) {
    arrStr += (word === words[words.length - 1]) ? word : word + ', ';
  }
  return arrStr;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);