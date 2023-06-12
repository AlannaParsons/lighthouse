// index.js

const { nextISSTimesForMyLocation } = require('./iss');

/**
 * nextISSTimesForMyLocation(callback) - retrieve the next 5 pass (fly over) times for the ISS.
 * Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
 *
 * @param {function} callback - A callback (to pass back an error or the array of resulting data)
 * @return {null} - printer function
*/
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (let passTime of passTimes) {
  var date = new Date(passTime.risetime * 1000);
  console.log(`Next pass at ${date.toLocaleString()} for ${passTime.duration} seconds!`);
  }
});
