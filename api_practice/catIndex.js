const { fetchBreedDescription } = require("./breedFetcher");

'use strict';

const breedName = process.argv[2];
//const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + catToSearch;

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});