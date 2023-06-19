// iss_promised.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
June 19 2023
-------------------------------------------------------------
rewrite code from iss.js to use promises instead of callbacks

fetch local IP using API
use IP to pull coordinates from API(latitude, longtitude)
use coordinates to get passover info of ISS from API
*/

const request = require('request-promise-native');

/**
 * fetchMyIP() - Makes a single API request to retrieve the user's IP address.
 *
 * @param {} -
 * @return {promise} - Promise of request for ip
 */
 const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};


/**
 * fetchCoordsByIP(body) - Makes a request to ipwho.is using the provided IP address
 *  to get its geographical information (latitude/longitude)
 *
 * @param {string} body - JSON string containing the IP address
 * @return {promise} - Promise of request for lat/lon
 */
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);

};

/**
 * fetchISSFlyOverTimes() - Makes a single API request to retrieve upcoming ISS
 *  fly over times the for the given lat/lng coordinates.
 *
 * @param {string} body - JSON string containing the lat/lng coordinates
 * @return {promise} - Promise of request for iss fly over times
 */
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};


const nextISSTimesForMyLocation = function(){
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
}

module.exports = { nextISSTimesForMyLocation };