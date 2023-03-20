/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 20 2023
-------------------------------------------------------------
Instruction

We will be creating a function to invert someone's name from
"first last" to "last, first". So the function should turn a
name like "Khurram Virani" into "Virani, Khurram".

*/

const nameInverter = function(name) {

  let honorific = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  let holdTitle = '';
  let result = '';

  if (typeof name !== 'undefined') {
    let nameArr = name.trim().split(' ');
    const titleCheck = nameArr.some(r=> honorific.indexOf(r) >= 0);

    if (titleCheck) {
      //alters nameArr
      holdTitle = nameArr.shift() + ' ';
    }

    if (nameArr.length === 0) {
      result = '';

    } else if (nameArr.length === 1) {
      result = holdTitle + nameArr.toString();

    } else if (nameArr.length === 2) {
      result = holdTitle + nameArr[1] + ', ' + nameArr[0];

    } else {
      console.log('t00 many names');
    }

  } else {

    throw new TypeError('Undefined name!');
  }

  return result;
}

module.exports = nameInverter;
