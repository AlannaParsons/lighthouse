/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 16 2023
-------------------------------------------------------------
JS Object From URL Encoded String
To safely send data in a URL, the data first has to be encoded 
to convert any special characters to URL safe characters. For 
this assignment we will only focus on the following URL encoding rules:

 - %20 represents a space character.
 - Key-value pairs are represented using an = character: key=value
 - Multiple key-value pairs are separated using a & character: 
      key1=value1&key2=value2


So the following URL encoded string:
city=Vancouver&weather=lots%20of%20rain
Could be converted to the following JavaScript object:
{
  city: "Vancouver",
  weather: "lots of rain"
}
*/

/**
 * urlDecode(text) turn specific string to object 
 *
 * @param {string} text - A string param
 * @return {object} obj : key and vals are strings
*/ 
const urlDecode = function(text) {
  objText= {};
  //make array, each item is key value pair;
  let keyVals = (text.split('&'));
  for (keyVal of keyVals){
    //make keyval into 2 items in array kvp = [key][val]
    let kvp = (keyVal.split('='));
    kvp[1] = kvp[1].split('%20');
    objText[kvp[0]] = kvp[1].join(' ');
  };
  
  return objText;
};


// TESTING
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);