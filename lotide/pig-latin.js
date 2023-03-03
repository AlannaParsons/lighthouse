/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 2 2023
-------------------------------------------------------------
Instruction
Write a program that takes any number of command line arguments,
converts each to pig latin (the rules are in the next paragraph),
then puts the translated words together into one sentence logged
to the console.

The true pig latin rules would be a bit difficult to implement,
so let's simplify them. Convert a word to pig latin by taking its
first letter, moving it to the end of the word, then adding "ay"
after it all.

ex:
node pig-latin.js pig latin
igpay atinlay

node pig-latin.js this is all just gibberish
histay siay llaay ustjay ibberishgay
*/

'use strict';
const args = process.argv;

/**
 * pigLatin(array)
 *
 * @param {array} args - command line args from user
 * @return {undefined} - i hate this
*/
const pigLatin = function(args) {
  let temp = '';
  for (let i = 2; i < args.length; i++) {
    temp += args[i].slice(1,args[i].length) + args[i][0] + 'ay ';
  }
  console.log(temp);
};

pigLatin(args);