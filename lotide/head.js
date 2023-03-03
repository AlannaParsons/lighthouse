/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Create a function head which returns the first item in the array.

The head function should not return the first element as an array.
It should simply return the element itself.
*/

/**
 * head(array)
 *
 * @param {array} array
 * @return {string} 1st item of array
*/ 
const head = function(array) {
  return array[0];
};

/**
 * assertEqual(actual, expected)
 *
 * @param {(string|number)} actual - A string param
 * @param {(string|numer)} expected - A string param
 * @return {undefined} 
*/ 
const assertEqual = function(actual, expected) {
  const badEmoji = String.fromCodePoint(0x1F4A9);
  const goodEmoji = String.fromCodePoint(0x1F638);
  if (actual === expected) {
    console.log(`${goodEmoji}${goodEmoji}${goodEmoji}` +
    ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${badEmoji}${badEmoji}${badEmoji}` +
    ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");