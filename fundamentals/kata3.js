/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 9 2023
-------------------------------------------------------------
In this exercise, we will be counting the number of vowels that 
appear in a given string. For this exercise, consider the following 
to be vowels: a, e, i, o, and u.

const numberOfVowels = function(data) {
  // Put your solution here
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
*/


//
//expected:
//   input - 
//          data : string
//   output - total of number of vowels in string
function numberOfVowels(data) {
  sum = 0;
  vowels =  ['a', 'e', 'i', 'o','u'];
  //vowels =  'aeiou';
  for (char of data){
    if (vowels.includes(char)){
      //console.log(char);
      sum += 1;
    }
  }
  return (sum);
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));