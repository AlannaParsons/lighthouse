/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
Case Maker
We will receive a normal string of words separated with spaces as 
the input. Our job is to convert these strings into camel cased strings.

*/

//
//expected:
//   input - 
//      input : string of words separated with space
//   output - strings into camel cased strings
function camelCase(input) {
  let temp = '';
  for (let i = 0; i < input.length; i++){
    if (input[i] === ' '){
      temp += input[i+1].toUpperCase();
      i++;
    }
    else {
      temp += input[i];
    }
  }
  return temp;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));