/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

The function should take in a sentence (as a string) and then
return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating
that L appears twice, and H once.

*unsure about spaces. to strip or not to strip
*/

// ACTUAL FUNCTION
/**
 * countLetters(str) - report back how many instances of each
 * char were found
 *
 * @param {string} str - an array of strings that we need to look through
 * @return {object} - key:chars value:number
*/
const countLetters = function(str) {
  const noSpaces = str.split(" ").join("");
  const results = {};

  for (let char of noSpaces) {
    results[char] = Object.prototype.hasOwnProperty.call(results, char) ?  results[char] + 1 : 1;
  }
  return results;
};

/**
 * assertEqual(actual, expected)
 *
 * @param {(string|number)} actual - A string param
 * @param {(string|numer)} expected - A string param
 * @return {undefined}
*/
const assertEqual = function(actual, expected) {
  const badEmoji = String.fromCodePoint(0x1F4A9);
  const goodEmoji = String.fromCodePoint(0x1F638);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}` +
    ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}` +
    ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST
console.log(countLetters("lighthouse in the house"));