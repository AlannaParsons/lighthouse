
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
May 8 2023
-------------------------------------------------------------
Instruction
Write the logic in breedFetcher.js to fetch the Siberian data from
the API endpoint using request.

Access the first entry in the data array and print out the description
for the user.

Allow the user to specify the breed name using command-line arguments.

Write code to output an appropriate message if the requested breed is not found.

Handle request errors and print the error details to the screen.
-----

refactor
All of the user-facing (terminal output) logic should be in the index.js file,
 and our fetchBreedDescription should simply be returning the description
 (or an error) via the provided callback.


*/

const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(URL, function (error, response, body) {
    const data = JSON.parse(body);

    if (error || data.length <= 0){
      callback(new Error('Cat breed not found'), null);
    } else {
      console.log(data[0].description);
      callback(null, data[0].description);
    }
  })
};

module.exports = { fetchBreedDescription };



