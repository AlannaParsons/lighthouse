/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 13 2023
-------------------------------------------------------------
Instruction

Make sumItems a function that sums all the numbers in an array.
So if you input the array [1, 2, 3, 4, 5], the function will
return 15. This will be your base case.


*/

function sumItems(array) {
  // Sum all the numbers in the array
  let n = 0;
  for (let item of array) {
    console.log('HERERE:',item);
    if (Array.isArray(item)) {
      console.log('is array:',item);
      sumItems(item);
    } else {
      n += item;
      console.log('else:',item);
    }
  }
  return n;
}

console.log(sumItems([1, 2, 3, 4, 5])); //	15
console.log(sumItems([[1, 2, [[3], 4]], 5, []])); //	15
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]])); //	1
