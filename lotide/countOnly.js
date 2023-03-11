/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

countOnly will be given an array and an object. It will return an
object containing counts of everything that the input object listed.

As shown in the example image above, only keys which have a truthy
value should be counted in the resulting object. All other strings
(either set to false or not included at all in the object) should
not be counted. That said, if a particular string is meant to be
counted but does not exist in the input array (like "f" in the example above),
it also does not have to be included in the final count.
*/

// ACTUAL FUNCTION
/**
 * countOnly(allItems, itemsToCount) - report back how many instances of each
 * string were found in the allItems array of strings.
 *
 * @param {array} allItems - an array of strings that we need to look through
 * @param {object} itemsToCount - an object specifying what to count
 * @return {object}
*/
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      results[item] = Object.prototype.hasOwnProperty.call(results, item) ?  results[item] + 1 : 1;
    }
  }
  return results;
};

// TEST/ASSERTION FUNCTIONS
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

// TEST CASES
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

