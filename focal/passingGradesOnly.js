/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------

Instruction
Write code to filter this list down to only passing grades.
This node script should print out passing grades to the console.
Passing grades for this scenario can be those that are 70 or above.

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
*/

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passing = grades.filter( grade => grade >= 70);

console.log('passing grades: ', passing);

