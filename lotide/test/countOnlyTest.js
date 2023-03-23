// TEST CODE
// last modified mar 23
/*
countOnly will be given an array and an object. It will return an
object containing counts of everything that the input object listed.
*/

const expect = require('chai').expect;
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns 1 for \"Jason\"", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns 2 for \"Fang\"", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined for \"Karima\", data in results, not firstNames", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns undefined for \"Agouhanna\", data in firstNames, not results", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns undefined for non existing data", () => {
    assert.strictEqual(result1["Farts"], undefined);
  });

});

// TEST DATA
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
