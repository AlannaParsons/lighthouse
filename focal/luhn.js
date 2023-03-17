/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 17 2023
-------------------------------------------------------------

Instruction
Write a function check, which, given a number, returns whether it
is valid or not (according to the Luhn Algorithm).

Luhn's algorithm determines whether or not a credit card number is valid.
For a given credit card number:

- Double the value of every other digit from right to left, beginning with the
second to last digit.
- Add the digits of the results of Step 1 to the remaining digits in the
credit card number.
- If the result mod 10 is equal to 0, the number is valid. If the result
mod 10 is not equal to 0, the validation fails.

Example

A credit card of type Visa is added with the number 4624 7482 3324 9080.

This credit card number starts with 4, as it should be in all Visa cards.
It also has 16 digits, which is valid for a Visa card. Now, execute Luhn's
algorithm:

Double the value of every other digit from right to left, beginning with
the second to last digit.
4624 7482 3324 9080:

8*2 = 16
9*2 = 18
2*2 = 4
3*2 = 6
8*2 = 16
7*2 = 14
2*2 = 4
4*2 = 8
Add the digits of the results of the previous step to the remaining digits
in the credit card number.
The digits of the result of Step a amount to the following:
1+6+1+8+4+6+1+6+1+4+4+8 = 50
The remaining digits in the credit card number amount to the following:
6+4+4+2+3+4+0+0 = 23
The sum of the two sub results is:
23+50 = 73
If the result mod 10 is equal to 0, the number is valid. If the result mod
10 is not equal to 0, the validation fails.
73 mod 10 is 3, therefore the card number is not valid.

A Visa credit card of number 4624 7482 3324 9780, on the other hand, passes
the validation.

*/

// FUNCTION
/**
 * luhn(num) - Returns true/false depending if number given was a valid
 * credit card number as determined by the luhn algorithm
 *
 * @param {number} num
 * @return {boolean}
*/
const luhn = function(num) {
  let oddNums = [];
  let evenNums = [];
  let arrayed = num.replace(/\s/g, '').split('');

  // Double the value of every other digit from right to left,
  //    begin with the second to last digit
  for (let i = arrayed.length-1; i >= 0 ; i --) {
    if (i % 2 === 1 ) {
      evenNums.push(arrayed[i]);
    } else {
      oddNums.push(Number(arrayed[i]) * 2);
    }
  }
  // 16, 18, 4, 6 >>> '1','6','1','8','4','6'
  let individializedOdds = oddNums.join('').split('');

  // If result mod 10 is equal to 0, the number is valid.
  // If the result mod 10 is not equal to 0, the validation fails.
  let validNum = (sums(evenNums) + sums(individializedOdds)) % 10 === 0;

  return validNum;
}

/**
 * sums(array) - sum items in array
 *
 * @param {array} array of string nums
 * @return {num}
*/
const sums = function(array) {
  const initialValue = 0;
  let sum = array.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    initialValue)

  return sum;
}

luhn('4624 7482 3324 9080'); //fail
luhn('4624 7482 3324 9780'); //pass