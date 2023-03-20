/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 20 2023
-------------------------------------------------------------

In this activity, we will be writing tests to make sure the car
buying function works the way Steve expects it to.

Here are Steve's specifications for an acceptable car to buy:

- The car must have fuel efficiency between 6 and 11 litres/100km
- The car must cost $5,000 or less
- If the car's color is pink, then he will buy it no matter what the price
  or litres/100km.
- If it's a hatchback, he will not buy it even if it's pink.
- The function should also return undefined if no car is passed in.
*/


const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3





  it("should return true when the car is pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function() {
    const car = {
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback and pink", function() {
    const car = {
      color: "pink",
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 1
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 6000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 5,
      price: -100
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 12,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return undefined when there is no car", function() {
    let car;
    console.log('car: ',car);

    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });

  /*

   ✓ should return true when the car is pink
    ✓ should return false when there are no details about the car
    ✓ should return false when the car is a hatchback
    ✓ should return false when the car is a hatchback and pink
    ✓ should return true when the car has 6 litres/100km and is under or equal to $5,000
    ✓ should return true when the car has 11 litres/100km and is under or equal to $5,000
    ✓ should return false when the car has 6 litres/100km and is over $5,000
    ✓ should return false when the car has 11 litres/100km and is over $5,000
    ✓ should return false when the car has 5 litres/100km and is under or equal to $5,000
    ✓ should return false when the car has 12 litres/100km and is under or equal to $5,000
    ✓ should return undefined when there is no car
*/

});