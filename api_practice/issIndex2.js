/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
June 19 2023
-------------------------------------------------------------
fetch local IP using API
use IP to pull coordinates from API(latitude, longtitude)
use coordinates to get passover info of ISS from API

fix callback hell from original iss.js

*/

const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });