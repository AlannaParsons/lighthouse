/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Write a program that takes any number of command line arguments,
all strings, and reverses them before outputting them one at a
time to the console.

ex:
node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/

'use strict';
const args = process.argv;

/**
 * reverse(array)
 *
 * @param {array} args - command line args from user
 * @return {undefined} - i hate this
*/
const reverse = function(args) {
  for (let i = 2; i < args.length; i++) {
    let rev = '';
    for (let j = (args[i].length) - 1; j >= 0; j--) {
      rev += args[i][j];
    }
    console.log(rev);
  }
};

reverse(args);