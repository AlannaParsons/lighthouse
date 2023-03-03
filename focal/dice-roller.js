/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 3 2023
-------------------------------------------------------------
Instruction

Write a program that takes a single parameter from the command line,
a number, and rolls that many six-sided dice.

For example, the following is a sample output of the program.

> node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
*/

'use strict';

// expects 1 arg, strips anything else
const args = process.argv;
const arg = args[2];

/**
 * rollDice(max)
 *
 * @param {number} rolls
 * @return {string}
*/
const rollDice = function(rolls) {
  //for 6 sided die
  const max = 7;
  const min = 1;
  let numbers = [];

  for (let i = 0; i < rolls; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return `Rolled ${rolls} dice: ${numbers.join(', ')}`;
};

console.log(rollDice(arg));