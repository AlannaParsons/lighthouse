// TEST CODE

const assert = require('chai').assert;
const titleCase = require('../titleCase');

/*
 - titleCase("this is an example") should return "This Is An Example"
 - titleCase("test") should return "Test"
 - titleCase("i r cool") should return "I R Cool"
 - titleCase("WHAT HAPPENS HERE") should return "What Happens Here"
 - titleCase("") should return ""
 - titleCase("A") should return "A"
*/

describe("#titleCase", () => {

  it("returns \"This Is An Example\" for \"this is an example\"", () => {
    assert.strictEqual(titleCase("this is an example"), "This Is An Example");
  });

  it("returns \"Test\" for \"test\"", () => {
    assert.strictEqual(titleCase("test"), "Test");
  });

  it("returns \"I R Cool\" for \"i r cool\"", () => {
    assert.strictEqual(titleCase("i r cool"), "I R Cool");
  });

  it("returns \"What Happens Here\" for \"WHAT HAPPENS HERE\"", () => {
    assert.strictEqual(titleCase("WHAT HAPPENS HERE"), "What Happens Here");
  });

  it("returns \"\" for \"\"", () => {
    assert.strictEqual(titleCase(""), "");
  });

  it("returns \"A\" for \"A\"", () => {
    assert.strictEqual(titleCase("A"), "A");
  });

});