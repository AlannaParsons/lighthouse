/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 6 2023
-------------------------------------------------------------
Instruction

a program that takes a single command line argument –
a simple password – and obfuscates it by following a few rules.

Our program should define a function named obfuscate. This function
should take a string as an argument and obfuscate it by applying
the following rules:

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).

ex:
node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y

 Do not use any built-in functions like String.prototype.replace
*/

'use strict';

// expects 1 arg, strips anything else
const args = process.argv;
const arg = args[2];
let temp = '';

/**
 * obfuscate() - takes string as an argument and obfuscates it by
 * applying rules (from header)
 *
 * @param {string} - command line arg
 * @return {string} - obfuscated password string
*/
const obfuscate = function(arg) {
  const charMap = {
    'a' : '4',
    'e' : '3',
    'o' : '0',
    'l' : '1'
  };

  for (let char of arg) {
    temp += charMap[char] ? charMap[char] : char;
  }
  return temp;
};

console.log(obfuscate(arg));