/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 18 2023
-------------------------------------------------------------
Bar Chart Project
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
 * blocksAway(directions)
 *
 * @param {array} directions - array of directions
 * @return {object} final location
*/ 