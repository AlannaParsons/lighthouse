// TEST CODE
/*
last modified mar 23

Implement the function findKeyByValue which takes in an object
and a value. It should scan the object and return the first key
which contains the given value. If no key with that given value is
found, then it should return undefined.
*/

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {

  it("returns \"drama\" for \"The Wire\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for \"That '70s Show\"", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});

//TEST DATA
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
