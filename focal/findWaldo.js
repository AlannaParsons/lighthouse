/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------


Modify the actionWhenFound function to let it receive and use the index
Modify the findWaldo function so that it passes the index array to the callback
Refactor the function findWaldo to use the forEach() method instead of a for loop.

*/


// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  // names.forEach(function (element, index) { if (element === "Waldo") {found(index);} })
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);
    }
  })
}

const actionWhenFound = function(index) {
  console.log(`Found him! He's here : ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//const func = () => {}