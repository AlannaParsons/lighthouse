/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 18 2023
-------------------------------------------------------------
Number Guesser
Write a guessing game where the user has to guess a secret number. 
After every guess the program tells the user whether their 
number was too large or too small. At the end, the number of tries 
needed should be printed.

Inputting the same number multiple times should only count as one 
try. If the user provides an answer which isn't a number, print an 
error message and do not count this as a try.

requires : package.json

*/

let prompt = require("prompt-sync")();

//may need more sanitization in prompts
let max = prompt("Enter highest possible number for game: ");
const num = String(Math.floor(Math.random() * Number(max)));
let guesses = [];
//console.log(num);

while (!guesses.includes(num)){
  let answer = prompt("Guess a number: "); 

  if (answer === 'exit'){
    console.log('FAIL SAFE EXIT');
    break;
  } else if (guesses.includes(answer)){
    console.log('Already Guessed!');
  } else if (!Number(answer)){
    console.log('Not a number! Try again!');
  } else if (Number(answer)<Number(num)){
    guesses.push(answer);
    console.log('Too Low!');
  } else if (Number(answer)>Number(num)){
    guesses.push(answer);
    console.log('Too High!');
  } else if (answer === num){
    guesses.push(answer);
    console.log('You got it! You took ', guesses.length ,' attempts!');
  };
};