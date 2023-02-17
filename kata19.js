/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 16 2023
-------------------------------------------------------------
Queen Threat Detector
algorithm to detect if two queens on a chess board can attack each other

A game of chess is played on an 8 column by 8 row board. 
In the game of chess, a queen can attack pieces which are on the same 
row, column, or diagonal.

In JavaScript, we can represent a chessboard using an 8 by 8 array 
(8 arrays within an array). For this exercise, our chess board 
will have 2 queens, and nothing else. A 1 in the array represents 
a queen on the corresponding square, and a O in the array represents 
an unoccupied square.

generates a chess board then write a function to detect whether or not the 
two queens are positioned so that they attack each other.

ex:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

location of queens [y][x], based on assignment ouline (dont love it)

help with diagonal coordinates 
*https://math.stackexchange.com/questions/1194565/how-to-know-if-two-points-are-diagonally-aligned
https://stackoverflow.com/questions/41432956/checking-for-horizontal-vertical-and-diagonal-pairs-given-coordinates
*/

/**
 * generateBoard(whiteQueen, blackQueen) string codification
 *
 * @param {array} whiteQueen - array [y][x] location
 * @param {array} blackQueen - array [y][x] location
 * @return {array of arrays} nested num array -> chessboard
*/ 
function generateBoard(whiteQueen, blackQueen){
  let grid = [];

  for(let y = 0; y < 8 ; y++){
    grid[y] = [];
    for(let x = 0; x < 8 ; x++){
      grid[y][x] = 0;
    }
  }
  grid[whiteQueen[0]][whiteQueen[1]] = 1;
  grid[blackQueen[0]][blackQueen[1]] = 1;
  return grid;
}

/**
 * queenThreat(generatedBoard) 
 *
 * @param {array of arrays} generatedBoard - nested num array -> chessboard
 * @return {boolean} boolean - if queens can attack based on positions
*/ 
function queenThreat(generatedBoard){
  let temp = findQueens(generatedBoard);
  let blackQueen = temp[0];
  let whiteQueen = temp[1];

  if (blackQueen[0] === whiteQueen[0] ||  //same row
    blackQueen[1] === whiteQueen[1] ||    //same column
    blackQueen[0] - whiteQueen[0] === blackQueen[1] - whiteQueen[1] ||// positive slope diagonal
    blackQueen[0] - whiteQueen[0] === whiteQueen[1] - blackQueen[1] //negative slope diagonal
    ){
    return true;
  }
  else {
    return false;
  }
}

/**
 * findQueens(generatedBoard) added function to scope as to not depend on globals
 * no way of knowing which queen is which at this point. set randomly
 * @param {array of arrays} generatedBoard - nested num array -> chessboard
 * @return {array of arrays} blackQueen[y,x] whiteQueen[y,x]
*/ 
function findQueens(generatedBoard){
  let queens = [];
  for(let y = 0; y < generatedBoard.length ; y++){
    for(let x = 0; x < generatedBoard[y].length ; x++){
      if (generatedBoard[y][x] === 1){
        queens.push([y,x]);
      }
    }
  }
  return queens;
}

// TESTING
/*
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
