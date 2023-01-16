/*
We'll write a chooseStations(stations) function that takes in an array of
possible voting stations, and then only returns the names of the stations 
that are appropriate.

In order for a station to be deemed appropriate, it must have a capacity 
of at least 20, and be a school or community centre.
*/

// expected - 
//  args: array or arrays
//  return: array of strings
const chooseStations = function (stations) {
  var temp = [];
  for (let station of stations){
    if (station[1] >= 20 && 
    ((station[2] === 'school') || (station[2] === 'community centre'))){
      temp.push(station[0]);
    }
  }
  return temp;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);

