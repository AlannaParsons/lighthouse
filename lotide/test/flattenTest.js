// TEST CODE
/*
last modified mar 23

Create a function flatten which will take in an array containing
elements including nested arrays of elements, and return a "flattened"
version of the array.

*/

const expect = require('chai').expect;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    expect(flatten([1, 2, [3, 4], 5, [6]])).to.eql([1, 2, 3, 4, 5, 6]);
  });

});
