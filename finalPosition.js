/*
Your function will receive an array of moves, which are strings that 
say either north, south, west, or east, these represent the parade 
moving in a particular direction by a single space on the grid. 
By looking at the path that the parade moves in, your function 
should calculate and then return an array representing the position 
of the parade after completing all of the moves. The first element 
of the array should be the X position, and the second element of 
the array should be the Y position. The parade begins at [0,0].
*/

// expected - 
//  starting position expected to be [0,0]
//  args: array of strings
//  return: array of nums
function finalPosition(moves){
  var x = 0;
  var y = 0;
  for (let direction of moves){
    switch(direction){
      case 'north':
        y += 1;
        break;
      case 'east':
        x += 1;
        break;
      case 'south':
        y -= 1;
        break;
      case 'west':
        x -= 1;
        break;
    }

  }
  return ([x,y]);

}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));