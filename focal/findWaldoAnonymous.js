/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 11 2023
-------------------------------------------------------------


Refactor the code by making the callback anonymous.
notes : [1,2,3].forEach(num => console.log('num: ', num));
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

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (ind){
  console.log (`Found him! He's here : ${ind}`)});
