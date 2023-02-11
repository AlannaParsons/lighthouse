/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 10 2023
-------------------------------------------------------------
Talking Calendar
In this activity, we will be converting date strings like "2017/12/02", 
into more English friendly date strings like December 2nd, 2017.

We will be given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. We will have to 
parse the given string and produce a human readable date.

ex: December 2nd, 2017
*/

//expected:
//   input - 
//      date : array of ingredients
//   output - string (date in words)
const talkingCalendar = function(date) {
  let dateArray = date.split('/');

  //strip leading '0' on day
  if (dateArray[2][0] === '0'){
    dateArray[2] = dateArray[2][1];
  };

  let finalDate = month(dateArray[1]) +' '+ dateArray[2]+ ordinal(dateArray[2]) +', '+ dateArray[0];
  return (finalDate);

  
};

//expected:
//   input - 
//      month : string
//   output - string
const month = function(month) {

  const monthMap = {"01":"January", "02":"February", "03":"March", "04":"April", 
  "05":"May", "06":"June", "07": "July", "08":"August", "09":"September", 
  "10":"October", "11":"November", "12":"December"};

  return ('what',monthMap[month]);
};

//expected:
//   input - 
//      month : string
//   output - string
const ordinal = function(day) {
  switch (day){ 
    case 21:
    case 1: 
      return 'st';
    case 22:
    case 2: 
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  };
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));