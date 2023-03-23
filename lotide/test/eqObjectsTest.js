// TEST CODE
/*
last modified mar 23

Implement the definition for function eqObjArr which will take
in two objects and returns true or false, based on a perfect match.

*/

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns True for equal object with differently ordered keys", () => {
    //expect(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    //expect(letterPositions("hello").e).to.eql([1]);
    //eqObjArr(shirtObject , anotherShirtObject) === true
    //assert(validator.isGroupValid(["a", "b", "c", "d", "e", "f"])).to.be.false
    assert.isTrue(eqObjects(shirtObject , anotherShirtObject));
  });

  it("returns False for object unequal # of keys", () => {
    assert.isFalse(eqObjects(shirtObject , longSleeveShirtObject));
  });

  it("returns True for equal object with differently ordered keys w array vals", () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("returns False for object with differently ordered keys w array vals and unequal # of keys", () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });

  it("returns False for nested objects w unequal vals after nested obj", () => {
    assert.isFalse(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }));
  });

  it("returns False for nested objects w unequal vals inside single nested obj", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns False for nested objects w unequal # of nested obj", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });

  it("returns True for equal array types", () => {
    assert.isTrue(eqObjects([1, 2, 3, 4, 5],[1, 2, 3, 4, 5]));
  });

  it("returns False for unequal array types", () => {
    assert.isFalse(eqObjects([1, 2, 8, 4, 5],[1, 2, 3, 4, 5]));
  });

  it("returns False for unequal length arrays", () => {
    assert.isFalse(eqObjects([1, 2, 3, 4, 5],[1, 2, 3, 4, 5, 6]));
  });

  it("returns True for equal arrays... super nested", () => {
    assert.isTrue(eqObjects([[1, 2, [[3], 4]], 5, []],[[1, 2, [[3], 4]], 5, []]));
  });

  it("returns False for unequal arrays. 4th level unequal", () => {
    assert.isFalse(eqObjects([[1, 2, [[3], 4]], 5, []],[[1, 2, [[], 4]], 5, []]));
  });

  it("returns False for unequal arrays. 3rd level unequal", () => {
    assert.isFalse(eqObjects([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 0]], 5, []]));
  });

  it("returns False for unequal arrays. 2nd level unequal", () => {
    assert.isFalse(eqObjects([[1, 2, [[3], 4]], 5, []],[[1, 2, [[3], 4]], 5, [0]]));
  });

  it("returns False for unequal arrays. 1st level unequal", () => {
    assert.isFalse(eqObjects([[1, 2, [[3], 4]], 5, []],[[1, 2, [[3], 4]], []]));
  });

  it("returns True for equal super nestes array", () => {
    assert.isTrue(eqObjects([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[1]]]]]]]]]]]]]));
  });

  it("returns False for unequal super nestes array", () => {
    assert.isFalse(eqObjects([[[[[[[[[[[[[1]]]]]]]]]]]]], [[[[[[[[[[[[[], 1]]]]]]]]]]]]));
  });

});

//TEST DATA
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
