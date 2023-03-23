// caesar.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 23 2023
-------------------------------------------------------------

Instruction
A Caesar Cipher (or more simply known as a shift cipher) is one
of the simplest and most widely known encryption techniques. It
works by shifting the alphabet a number of spaces (known as your key)
along the alphabet. Therefore, the letter e encrypted using this cipher
with a left shift of 3 (-3) would become a b. You can see more examples
in the table below:

Caesar Cipher with a Left shift of 3

Implement the encrypt function, which will take in a plaintext
(i.e. un-encrypted text) string and a key (negative for a left
  shift, positive for a right shift).

This function should return the plaintext value shifted by the
number of characters defined by the key.

Note: The Space character (" ") should not be shifted.
*/

// FUNCTION
/**
 * encrypt(plaintext, key) -
 *
 * will tolerate symbols but will break cypher
 *
 * @param {string} plaintext - string to encrypt
 * @param {number} key - amount by which to shift text
 * @return {string} encrypted
*/
const encrypt = function(plaintext, key) {
  const str = plaintext.toLowerCase().split('');
  var result = [];
  let abound = 97;
  let zbound = 122;

  result = str.map(function (c){
    if (c !== ' ') {
      let newcode = (c.charCodeAt() + key);
      if ( newcode < abound ) { newcode = (zbound + 1) - (abound - newcode) }
      else if ( newcode > zbound ) { newcode = (abound - 1) + (newcode - zbound) }
      return String.fromCharCode(newcode);
    }
    else { return c }
  })
console.log(result.join(''))

  return result.join('');
};

module.exports = { encrypt };