const expect = require('chai').expect;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] for [1]", () => {
    expect(middle([1])).to.eql([]);
  });

  it("returns [] for [1, 2]", () => {
    expect(middle([1, 2])).to.eql([]);
  });

  it("returns [2] for [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.eql([2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.eql([3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.eql([2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3, 4]);
  });

});