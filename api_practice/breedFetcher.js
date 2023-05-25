
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
*/

const request = require("request");
'use strict';

const args = process.argv;
const catToSearch = args[2];
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catToSearch;

request(URL, function (error, response, body) {
  const data = JSON.parse(body);

  if (error){
    console.log('ERROR: ',error);
  } else if (data.length <= 0) {
    console.log('Cat breed', catToSearch, 'not found');
  } else {
    console.log(data[0].description);
  }
})

