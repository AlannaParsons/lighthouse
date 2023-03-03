/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Make the function compare the two values it takes in and print out
a message telling us if they match or not.

If the values match, it should print (console.log) the following:
Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following:
Assertion Failed: [actual] !== [expected] (but with the values filled in)

putting emojis in string ->
https://stackoverflow.com/questions/46043330/how-to-insert-emoticons-chars-into-js-script
emojis ->
https://unicode.org/emoji/charts/full-emoji-list.html#1f600
** change from U+2600 -> 0x2600 . unsure why
*/

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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);