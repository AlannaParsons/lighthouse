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
 * The Rules / Guidelines:

    - Give your functions precise verb/action based names
    - Use camelCasedNames (like this one)
    - Properly indent the function code
    - Functions should focus on a single task: returning a value or causing a
      side effect. Break your function into additional smaller functions
      if you find it doing two or more things
        One single task could be to compute and return a value (eg: zeroPad)
        Another single task could be to perform a side effect such as
        logging a message to the screen (eg: printFarmInventory)
    - It is ideal if functions try to avoid reading outer scope variables. If a function needs some information / data, then that data should instead be passed in as a parameter, making it available within the function's inner scope.
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