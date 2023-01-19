/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 19 2023
-------------------------------------------------------------
When this function is given an array and a value, it should return 
the index of the last time the value occurs in the array. 
If the value never occurs, the function should return -1.
*/


// expected-
//    input: [an array], a num
//    output: num - index of last arg found in array. or -1
function lastIndexOf(arr, num){
  let index = -1;
  for (let i = 0; i<arr.length ; i++){
    if (arr[i] === num){index = i;}
  }
  return index;
}


//TESTS
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([3,2,1,0], 3), "=?", 0);