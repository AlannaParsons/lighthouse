// TEST CODE
/*
last modified mar 23

We'll implement a new function letterPositions which will return
all the indices (zero-based positions) in the string where each
character is found.

For each letter, instead of returning just one number to represent
its number of occurrences, multiple numbers may be needed to represent
all the places in the string that it shows up.
*/

const expect = require('chai').expect;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {

  it("returns [1] for \"hello\".e", () => {
    expect(letterPositions("hello").e).to.eql([1]);
  });

  it("returns [2, 3] for \"hello\".l", () => {
    expect(letterPositions("hello").l).to.eql([2, 3]);
  });

  it("returns [3, 5, 15, 18] for \"lighthouse in the house\".h", () => {
    expect(letterPositions("lighthouse in the house").h).to.eql([3, 5, 15, 18]);
  });

  it("returns [9, 16, 22] for \"lighthouse in the house\".e", () => {
    expect(letterPositions("lighthouse in the house").e).to.eql([9, 16, 22]);
  });

});
