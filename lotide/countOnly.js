/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction
Refactor function - Mar 23 - export function

countOnly will be given an array and an object. It will return an
object containing counts of everything that the input object listed.

As shown in the example image above, only keys which have a truthy
value should be counted in the resulting object. All other strings
(either set to false or not included at all in the object) should
not be counted. That said, if a particular string is meant to be
counted but does not exist in the input array (like "f" in the example above),
it also does not have to be included in the final count.
*/

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

module.exports = countOnly;