/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 16 2023
-------------------------------------------------------------
Square Code
create our own Square Code algorithm

In Square Code, the spaces are removed from the english text and 
the characters are written into a square (or rectangle). 
ex: the sentence "If man was meant to stay on the ground god 
would have given us roots" is 54 characters long, once the 
spaces are removed, so it is written into a rectangle with 
7 rows and 8 columns.
    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
*/

/**
 * squareCode(message) string codification
 *
 * @param {string} message - A string param
 * @return {string} string after codification
*/ 
const squareCode = function(message) {

  let condensed = message.split(' ').join('');
  let len = condensed.length;
  let coded = '';
  let sqspc = (Math.ceil(Math.sqrt(len))); // contorls # and len of words

  for(let a = 0; a < sqspc; a++){
    for (let i = a; i < len; i+= sqspc){
      coded += (condensed[i]);
    }
  coded += ' ';
  }

  return coded;
};


//TESTING
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));