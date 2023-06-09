/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
June 8 2023
-------------------------------------------------------------
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

/*
It should take in two arguments: ip (string) and callback
Add the function to the object properties being exported from iss.js
For now, it can have an empty body and do nothing
*/

 const request = require("request");

 const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API

  const URL = 'https://api.ipify.org?format=json';

  request(URL, function (error, response, body) {

      // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    else if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;


  // if we get here, all's well and we got the data
    } else {
      const data = JSON.parse(body);
      callback(null, data.ip);
    }
  })


}
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
      callback(null, [data.latitude, data.longitude]);
    }
  })
}


module.exports = { fetchMyIP, fetchCoordsByIP };