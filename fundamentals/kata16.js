/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs - prep work
Feb 16 2023
-------------------------------------------------------------
Case Maker II
In this exercise, we will be building an advanced case maker 
that can convert strings into all different kinds of case styles; 
like camel, pascal, snake, or even kebab.

Precedence of each of the casing styles are as follows, values 
higher in the list should be processed first:

1 - camel, pascal, snake, kebab, title
2 - vowel, consonant
3 - upper, lower
Our function should be able to handle all of these cases.

ex: thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING


kase use to replace case (invalid variable name)

using string to function call:
**https://stackoverflow.com/questions/1723287/calling-a-javascript-function-named-in-a-variable
*/

//expected:
//   input - 
//      instructors : str
//      case : str || array of str
//   output - str (converted to given case)
const makeCase = function(input, kase) {

  // lower cases should be executed last 
  //  higher executed is allowed to be overwritten by lower levels 
  //    but not cocurrently cases. will priorotize left to right
  const kasePriority = [
    ['camel', 'pascal', 'snake', 'kebab', 'title'],
    ['vowel', 'consonant'],
    ['upper', 'lower']
  ];

  //setup functions
  const caseFunctions = {
    'camel': camel,
    'pascal': pascal,
    'snake': snake,
    'kebab': kebab,
    'title': title,
    'vowel': vowel,
    'consonant': consonant,
    'upper': upper,
    'lower': lower 
  };

  console.log(kase,':');
  //find kases that are arrays, find case in priority, take only 1 kase per 
  //  level of priority
  let temp = '';
  if (typeof kase != "string"){
    for(let level of kasePriority){
      for (let item of level){
        let ind = kase.indexOf(item);
        if (ind !== -1){
          input = (caseFunctions[kase[ind]](input));
          break;
        }
      }
    }
    temp = input;
  }
  else {
    temp = (caseFunctions[kase](input));
  }
  return temp;
};

const camel = function(input) {
  inputArray = (input.split(' '));
  temp = [];
  for (word of inputArray){
    if (inputArray.indexOf(word) === 0){
      temp.push(word);
    }
    else{
      temp.push((word[0].toUpperCase()) + word.substring(1));
    }
  }
  return temp.join('');
};

// ALL CASE FUNCTIONS :
//expected:
//   input - 
//      input : str
//   output - str (converted to given case)
const pascal = function(input) {
  temp = [];
  for (word of (input.split(' '))){
    temp.push((word[0].toUpperCase()) + word.substring(1))
  }
  return temp.join('');
};

const snake = function(input) {
  return input.split(' ').join('_');;
};

const kebab = function(input) {
  return input.split(' ').join('-');
};

const title = function(input) {
  temp = [];
  for (word of (input.split(' '))){
    temp.push((word[0].toUpperCase()) + word.substring(1))
  }
  return temp.join(' ');
};

const vowel = function(input) {
  const vowels =  ['a', 'e', 'i', 'o','u'];
  let temp = '';
  for (let i = 0; i < input.length; i++){
    if (vowels.includes(input[i])){
      temp += input[i].toUpperCase();
    }
    else {
      temp += input[i];
    }
  }
  return temp;
};

const consonant = function(input) {
  let temp = '';
  const vowels =  ['a', 'e', 'i', 'o','u'];
  for (let i = 0; i < input.length; i++){
    if (!vowels.includes(input[i])){
      temp += input[i].toUpperCase();
    }
    else {
      temp += input[i];
    }
  }
  return temp;
};

const upper = function(input) {
  return (input.toUpperCase());
};

const lower = function(input) {
  return (input.toLowerCase());
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "snake", "vowel"]));
console.log(makeCase("this is a string", ["kebab", "camel"]));
console.log(makeCase("this is a string", ["lower", "upper"]));