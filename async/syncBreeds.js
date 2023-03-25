// syncBreeds.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------

Instruction
- Have our file print out these three words 4311o th3r3 w0r1d three
seconds after the file is run.


- Instead of printing the entire sentence together, have our code print
out each of the three words one at a time, 1 second apart.

It's okay if each of the words appears on a separate line, due to console.log.

** help w nested timers
https://stackoverflow.com/questions/17574571/nested-settimeout-alternative
*/

// data in memory
const catBreeds = {
  'Balinese': "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.",
  'Bombay': "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder."
};

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {
  // can simply return it (easy peezee, butter squeezy) ...
  return catBreeds[breed];
};

// get the return value right away from the function
const bombay = breedDetails('Bombay');
//console.log(bombay); //=> prints out the description for that breed

module.exports = breedDetails;