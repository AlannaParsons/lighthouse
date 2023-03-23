// TEST CODE

// comparing arrays using chai
// https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d

const expect = require('chai').expect;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [6,7] for [5,6,7]", () => {
    expect(tail([5,6,7])).to.eql([6,7]);
  });

  it("returns [] for ['5']", () => {
    expect(tail(['5'])).to.eql([]);
  });

  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    expect(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});