/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 17 2023
-------------------------------------------------------------

Instruction
For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase

Task 1
Given the above parameters, write a program so that you can figure
out how many total bottles of pop can be redeemed given a customer
investment

given a $20 investment, the customer will get 10 bottles of pop.
That gives a supply of both bottles and bottle caps that can be used
to redeem for further bottles, which will then produce a further supply
for recycling.

Investment	Total Bottles
10	         15
20	         35
30	         55
40	         75

Task 2
Have your program accept an argument (argv) that will allow the user
to specify the amount (in dollars) that the customer is going to spend.
The node script will then calculate the total number of bottles that
the customer will receive.

Task 3
Enhance the output of your program so that once the amount has been
given, it provides a breakdown of how many bottles were purchased, how
many were obtained through bottle recycling, and how many were obtained
through bottle cap recycling.

Total bottles: 75
Total earned:
    Bottles: 37
    Caps: 18

Task 4
Add to the output, so that the program will tell the customer how many
bottles and bottle caps they will have left over. We have to upsell the
customer on buying more pop after all!
Total bottles: 75
Remaining bottles: 1
Remaining caps: 3
Total earned:
    Bottles: 37
    Caps: 18
*/

// FUNCTIONS
/**
 * poppingBottles(moneyIn) - take money from user to calculate how many
 * bottles individual may buy and how many bottles are acquired with trade in
 * program
 *
 *
 * @param {number} moneyIn
 * @return {undefined} console logs result
*/
const poppingBottles = function(moneyIn) {
  let bottles = moneyIn/2;

  let [
    totalBottles, totalCapsToBottles, totalEmptiesToBottles,
    newBottles, capRemain, botRemain
  ] = recursiveReturnProgram([bottles, 0, 0, bottles, 0, 0]);

  console.log(
    `Total bottles: ${totalBottles}
    Remaining bottles: ${botRemain}
    Remaining caps: ${capRemain}
    Total earned:
      Bottles: ${totalEmptiesToBottles}
      Caps: ${totalCapsToBottles}
    `);
}

/**
 * recursiveReturnProgram(state) -
 * state = [
 *  totalBottles - total bottles purchased + acquired via trade in
 *  totalCapsToBottles - total bottles acquired via cap trade in
 *  totalEmptiesToBottles - total bottles acquired via empty bottle trade in
 *  currentBottles - current 'full' bottles (to disassemble and trade)
 *  capCarry - carry over of caps (<4)
 *  emptyCarry - carry over of empty bottles (<2)
 * ]
 *
 * @param {array} state immediately destructured ^^
 * @return {array} updated state
*/
const recursiveReturnProgram = function([totalBottles, totalCapsToBottles, totalEmptiesToBottles, currentBottles, capCarry, emptyCarry]) {

  //For every four bottle caps, you can get one free (full) bottle of pop
  let currentCaps = capCarry + currentBottles;
  let capToBottles = Math.floor(currentCaps/4);
  let capRemain = currentCaps % 4;

  //For every two empty bottles, you can get one free (full) bottle of pop
  let currentEmpties = emptyCarry + currentBottles;
  let emptiesToBottles = Math.floor(currentEmpties/2);
  let botRemain = currentEmpties % 2;

  //updating total counts for final return
  let newBottles = capToBottles + emptiesToBottles;
  totalBottles += newBottles;
  totalCapsToBottles += capToBottles;
  totalEmptiesToBottles += emptiesToBottles;

  // make current state
  let state = [
    totalBottles, totalCapsToBottles, totalEmptiesToBottles,
    newBottles, capRemain, botRemain
  ];

  if (newBottles > 0) {
    state = recursiveReturnProgram(state);
  }

  return state
}


const input = function() {
  'use strict';

  let input = process.argv[2];

  poppingBottles(Number(input));
}

input();
