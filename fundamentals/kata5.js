/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 9 2023
-------------------------------------------------------------
Percent Encoded String
In this exercise, we will be given a normal string of words and 
turn it into a percent-encoded string by replacing all whitespace with %20.

If there is whitespace on the outside of the string, like in our second 
example above, you should only replace the whitespace within the string.

const urlEncode = function(text) {
  // Put your solution here
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/


//
//expected:
//   input - a string of words
//   output - that string with all of the whitespace characters converted to %20
function urlEncode(text) {
  let newText = '';
  for (let char of text.trim()){
    char = char === " " ? "%20" : char;
    newText += char;
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));