/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 17 2023
-------------------------------------------------------------

Instruction
Write a function check, which, given a number, returns whether it
is valid or not (according to the Luhn Algorithm).
Create a function maxProfit, which, given a list of stock prices for
a given day, returns the maximum profit that could have been made by
buying a stock at the given price and then selling the stock later on.

For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your
program should return 16 because if you bought the stock at $24 and
sold it at $40, a profit of $16 was made and this is the largest profit
that could be made. If no profit could have been made, return -1.
*/

// FUNCTION
/**
 * maxProfit(num) - given a list of stock prices for a given day,
 *  returns the maximum profit that could have been made
 *
 * brute force method - calc profit for every num & compare
 *
 * @param {array} array of nums
 * @return {number}
*/
const maxProfit = function(array) {
  let max = 0;

  //for (let buy of array) 
  for (let i = 0; i < array.length ; i++) {
    //for (let sell of array) 
    for (let j = i + 1; j < array.length ; j++) {
      max = (array[j] - array[i]) > max ? array[j] - array[i] : max;
      console.log('buy:',array[i],'  sell:',array[j], '  max:',max);
    }
  }
  return max;
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);