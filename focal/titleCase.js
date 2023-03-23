/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 23 2023
-------------------------------------------------------------

Instruction

Construct the a function called titleCase that takes a sentence
string and gives it title casing.

*/

/**
 * titleCase() - takes string and gives it title casing.
 *
 * @param {string} input
 * @return {string}
*/
const titleCase = function (input) {
  let response = '';
  if (input) {
    const temp = [];
    const inputArray = input.split(' ');

    for (let word of inputArray){
      temp.push((word[0].toUpperCase()) + word.substring(1).toLowerCase());
    }
    response = temp.join(' ');
  }
  return response;

}

module.exports = titleCase;