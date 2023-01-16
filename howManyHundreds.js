/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Jan 16 2023
-------------------------------------------------------------
When this function is given a number, it should return how 
many hundreds fit into that number.
*/

function howManyHundreds(num){
  return (Math.floor(num / 100));
}


/*
TESTING
-------------------------------------------------------------
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/