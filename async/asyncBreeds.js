// asyncBreeds.js

//Change the breedDetailsFromFile function to take in and use a callback.
//Then, modify our call to that function by passing in a callback.
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./catData/${breed}.txt`, 'utf8', (error, data) => {
    //console.log("In readFile's Callback: it has the data.");
    if (!error) return callback(data);
    else return callback(undefined);
  });
};

const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

//breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;