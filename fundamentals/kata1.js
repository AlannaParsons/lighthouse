/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 19 2023
-------------------------------------------------------------
Create a function named sumLargestNumbers that will receive an array 
of numbers and return the sum of the two largest numbers in that array.

const sumLargestNumbers = function(data) {
  // Put your solution here
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/


//expected:
//   input - array of nums
//   output - sum of 2 largest numbers in array
//   
// uses index to avoid pullin same num for both values
function sumLargestNumbers(nums){
  let x = 0; let y = 0;
  let xInd = -1; let yInd = -1;
  for (let i = 0; i<nums.length; i++){

    if (nums[i] > x && x<=y){
      x = nums[i];
      xInd = i;
    }
    if (nums[i] > y && xInd != i ){
      y = nums[i];
      yInd = i;
    }
  }
  return (x+y)
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
