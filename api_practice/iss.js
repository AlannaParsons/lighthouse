/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
June 8 2023
-------------------------------------------------------------
fetch local IP using API
use IP to pull coordinates from API(latitude, longtitude)
use coordinates to get passover info of ISS from API

** left testing logs for now
*/

const request = require("request");

/**
 * fetchMyIP(callback) - Makes a single API request to retrieve the user's IP address.
 *
 * @param {function} callback - A callback (to pass back an error or the IP string)
 * @return {error|string} - An error, if any (nullable)
 *    - The IP address as a string (null if error). Example: "162.245.144.188"
 */

 const fetchMyIP = function(callback) {
  const URL = 'https://api.ipify.org?format=json';

  request(URL, function (error, response, body) {

    if (error) {
      callback(error, null);
      return;
    } else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const data = JSON.parse(body);
      callback(null, data.ip);
    }
  })
}

/**
 * fetchCoordsByIP(ip, callback) -
 *  takes in an IP address and returns the latitude and longitude for it
 *
 * @param {string} ip
 * @param {function} callback - A callback (to pass back an error or resulting data)
 * @return {error|object} - An error, if any (nullable)
 *                  - The latitude and longitude of given ip (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' }
*/
const fetchCoordsByIP = function(ip, callback) {
  const URL = 'http://ipwho.is/' + ip;

  request(URL, function (error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
   if (!data.success) {
      const msg = `Success status was false. Server message says: Invalid IP address when fetching for IP ${ip}}`;
      callback(Error(msg), null);
      return;

    } else {
        const { latitude, longitude } = data;

      callback(null, { latitude, longitude });
    }
  })
}

/**
 * fetchISSFlyOverTimes(coordinates, callback) -
 * Makes a single API request to retrieve upcoming ISS fly over times the for the
 *  given lat/lng coordinates.
 *
 * @param {object} coordinates - An object with keys `latitude` and `longitude`
 * @param {function} callback - A callback (to pass back an error or the array of resulting data)
 * @return {error|array} - An error, if any (nullable)
 *                  - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
*/
const fetchISSFlyOverTimes = function(coordinates, callback) {
  const URL = `https://iss-flyover.herokuapp.com/json/?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;

  request(URL, function (error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
   if (response.statusCode !== 200 || data.message !== 'success') {
      const msg = `Success status was false. Server message says: Invalid IP address`;
      callback(Error(msg), null);
      return;

    } else {
      callback(null, data.response);
    }
  })
}

const nextISSTimesForMyLocation = function(callback) {

  fetchMyIP((error, ip) => {
    if (error) {
      //console.log("fetchMyIP didn't work!" , error);
      return callback(error, null);
    }
    //console.log('It worked! Returned IP:' , ip);

    fetchCoordsByIP(ip, (error, coordinates) => {
      if (error) {
        //console.log("fetchCoordsByIP didn't work! " , error);
        return callback(error, null);
      }
      //console.log('It worked! Returned coordinates - latitude:' , coordinates.latitude, ' longitude:', coordinates.longitude);

      fetchISSFlyOverTimes(coordinates, (error, nextPasses) => {
        if (error) {
          //console.log("fetchISSFlyOverTimes didn't work! " , error);
          return callback(error, null);
        }

        //console.log('It worked! Returned flyover times:' , nextPasses);
        return callback(null, nextPasses);
      });

    });

  });

}

module.exports = { nextISSTimesForMyLocation};