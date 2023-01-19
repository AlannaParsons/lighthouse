/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 19 2023
-------------------------------------------------------------
The function should, when given two sorted arrays containing numbers, 
returns a sorted array of the numbers from both lists.

EX: merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]) >>> [ 1, 2, 3, 4, 4, 5, 6 ]
*/

function merge(arr1, arr2){
  for (var i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1.sort();
}

//TESTS
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);