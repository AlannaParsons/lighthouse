/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 9 2023
-------------------------------------------------------------
SmartParking
We need to write a function called whereCanIPark() that returns 
the coordinates of any(!) available parking spot for the vehicle, 
or returns false if there is no available spot. Our function 
receives an array of arrays representing parking spots, and a 
string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, 
and motorcycles.

Regular cars can only park in R spots.
Small cars can park in R or S spots.
Motorcycles can park in R, S, or M spots.

In the array of parking spots, spots are written in both lower-case 
and upper-case. An upper-case letter means that the particular spot 
is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.
*/


//
//expected:
//   input - 
//      spots : an array of arrays representing parking spots
//      vehicle : string with type of the vehicle
//   output - array w [X, Y] coordinates or available space
const whereCanIPark = function (spots, vehicle) {
  for (let row in spots){
    for (let column in spots[row]){
      if (spots[row][column] === 'R'){
        return [column, row];
      }
      else if ((vehicle === 'small' || vehicle === 'motorcycle') && spots[row][column] === 'S'){
        return [column, row];
      }
      else if ((vehicle === 'motorcycle') && spots[row][column] === 'M'){
        return [column, row];
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))