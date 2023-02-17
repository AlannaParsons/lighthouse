/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 16 2023
-------------------------------------------------------------
Taxicab Geometry
algorithm to help taxicabs determine how far away a destination is 
based on the directions given

The taxi driver is given a list of directions that tell her 
whether to turn left or right, and how many blocks to drive for. 
Every time the taxi driver has to turn left, she will make a 90° turn 
anticlockwise, and every time the taxi driver has to turn right, she will 
make a 90° turn clockwise.

Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1]
we can determine that she is 1 block east and 3 blocks north of where she started.

Create a function named blocksAway that will receive an array of directions, 
and return an object that calculates how far north and east those 
directions will take someone.
The taxi driver will always start at the same position, in the most south 
west position on the grid. This means that the output will only need to 
specify an east and north position, since the taxi driver can only end 
up in these East and North of the starting point.

ex:{east: 1, north: 3}

help with accessing an array circularly
**https://stackoverflow.com/questions/17483149/how-to-access-array-in-circular-manner-in-javascript

*/

/**
 * generateBoard(whiteQueen, blackQueen) string codification
 *
 * @param {array} directions - array of directions
 * @return {object} final location
*/ 
const blocksAway = function(directions) {
  distanceAway = {
    'east': 0,
    'north': 0
  };

  let compass = (directions[0] === 'right') ? 'n' : 'e';
  for (let i = 0 ; i < directions.length ; i+=2){
  //for (let [compass, speed] of directions){
    //console.log('comp:',compass,'  speed',speed);
    if (directions[i]==='right'){
      compass = changeDirection(compass, 1);
      updateLocation(distanceAway, directions[i+1], compass);
    } else if (directions[i]==='left'){
      compass = changeDirection(compass, -1);
      updateLocation(distanceAway, directions[i+1], compass);
    }
  }
  return distanceAway;
};

/**
 * changeDirection(direction,turn)
 *
 * @param {string} direction - previous trajectory 'n','e','s','w'
 * @param {num} turn - may be 1 or -1 depending on r or l turn
 * @return {string} current trajectory
*/ 
const changeDirection = function(direction,turn) {
  let compass = ['n','e','s','w'];
  let i = compass.indexOf(direction)+turn;
  let len = compass.length;
  //circular iteration w compass
  let newDirection = compass[(i % len + len) % len];
  
  return newDirection;
}

/**
 * change(distanceAway,speed,newDirection )
 *
 * @param {object} distanceAway - obj to be changed
 * @param {num} speed - distance travelled
 * @param {string} newDirection - trajectory 'n','e','s','w'
 * @return {object} value of obj to be changed
*/ 
const updateLocation = function(distanceAway, speed, newDirection) {
  switch(newDirection){
    case 'n':
      return distanceAway.north += speed;
    case 'e':
      return distanceAway.east += speed;
    case 's':
      return distanceAway.north -= speed;
    case 'w':
      return distanceAway.east -=speed;
  }
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));