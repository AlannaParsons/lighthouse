/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 19 2023
-------------------------------------------------------------

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end 
counting by step.

The function should return an empty array [] if given incorrect parameters, 
such as:
- start, end, or step being undefined
- start being greater than end
- step being 0, or negative
*/

function range(start, end, step){
  if ((start === undefined || end === undefined || step === undefined) || 
  (start > end) ||
  (step < 0)) {
    return [];
  }
  else {
    var temp = []
    for (let i = start; i<=end; i+=step){
      temp.push(i);
    }
    return temp;
  }
}

//TESTS
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));