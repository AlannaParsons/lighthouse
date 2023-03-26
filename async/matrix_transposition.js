// matrix_transposition.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------

Instruction
Complete the function named transpose that will return a transposed version
of the input 2D array.

1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4
----
1 3 5
2 4 6
----
1
2
3
4
5
6
7
*/

const transpose = function (matrix) {
  let product = [];
  for (let r = 0 ; r < matrix.length; r++) {
    for (let c = 0 ; c < matrix[r].length; c++) {
      if (product[c]) {
        product[c].push(matrix[r][c]);
      } else {
        product[c] = [matrix[r][c]];
      }
    }
  }

  return product;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));