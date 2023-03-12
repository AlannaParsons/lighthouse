/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------

Instruction
Use the map method on lighthouses so that we instead see an array
of numbers.

The array of numbers should be the length of each name in the
lighthouses.
*/

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const lengths = lighthouses.map(string => string.length);

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
console.log(lengths);