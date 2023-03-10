/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 12 2023
-------------------------------------------------------------
Change Calculator
We will be given two numbers, the total of a transaction, 
and the amount of cash given to the cashier. Both of these 
numbers will be represented as whole numbers in cents. 
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which 
describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still calculate 
the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)

ex: { twoDollar: 1, dime: 1, penny: 3 }

-------------------------------------------------------------
using sort to control obj, only useful considering obj is small & known.
first use, inline anonymous function
-------------------------------------------------------------
*/

//expected:
//   input - 
//      total : num
//      cash : num
//   output - obj (amounts of each money to make change)
const calculateChange = function(total, cash) {
  let change = {};
  let reimburse = cash - total;

// for loop finds undefined value in obj moneyMap for some reason. non issue?
  for (let key of (Object.keys(moneyMap).sort((a, b) => b - a ))){
    reimburse = convertChange(change, key, reimburse);
  }
  return change;
};

//expected:
//   input - 
//      change : obj (to be changed over course of function)
//      numAmount : num (number to be used in moneyMap)
//      reimburse : num (amount left to be reimbursed)
//   output - num (amount left to be reimbursed after pulling out change)
const convertChange = function(change, numAmount, reimburse){
  if (reimburse / numAmount >= 1) { 
    change[moneyMap[numAmount]] = Math.floor(reimburse / numAmount);
    return (reimburse % (numAmount));
  }
  else {
    return reimburse;
  };
};

const moneyMap = {
  2000 : 'twentyDollar', 
  1000 : 'tenDollar', 
  500 : 'fiveDollar', 
  200 : 'twoDollar',
  100 : 'oneDollar', 
  25 : 'quarter', 
  10 : 'dime', 
  5 : 'nickle', 
  1 : 'penny'};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));