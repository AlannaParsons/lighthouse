// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');
let ip = '42';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(ip, (error, data) => {
  if (error) {
    console.log("It didn't work! " , error);
    return;
  }

  console.log('It worked! Returned coordinates - latitude:' , data[0], ' longitude:', data[1]);
});