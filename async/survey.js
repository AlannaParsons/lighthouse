// survey.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------
Instruction

Once all questions are answered, our survey app should output a
fully formed paragraph for their online profile, similar to the one
shown previously. It should then exit. The user would have to rerun
the app to go through the process of generating another profile.

What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!

currently require you to know order of questions in array, could do nest objs w ids alternativly

help w concurrent rl calls:
https://stackoverflow.com/questions/36540996/how-to-take-two-consecutive-input-with-the-readline-module-of-node-js
*/

const readline = require('readline');

//currently global... doesnt need to be
const data = [
  { question : 'What\'s your name? Nicknames are also acceptable : ',
    answer : ''
  },
  { question : 'What\'s an activity you like doing? : ',
  answer : ''
  },
  { question : 'What do you listen to while doing that? : ',
  answer : ''
  },
  { question : 'Which meal is your favourite (eg: dinner, brunch, etc.) : ',
  answer : ''
  },
  { question : 'What\'s your favourite thing to eat for that meal? : ',
  answer : ''
  },
  { question : 'Which sport is your absolute favourite? : ',
  answer : ''
  },
  { question : 'What is your superpower? In a few words, tell us what you are amazing at! : ',
  answer : ''
  }
];

/**
 * paraMake(data) - makes paragraph from user answers from data
 *
 * @param {array} data - array of objects {question:'', answer: ''}
 * @return {string} string
*/
const paraMake = function(data) {
  return`${data[0].answer} loves listening to ${data[2].answer}` +
  ` while ${data[1].answer}, devouring ${data[4].answer} for ${data[3].answer},` +
  ` prefers ${data[5].answer} over any other sport, and is amazing at` +
  ` ${data[6].answer} at inopportune times.`
}

/**
 * askQuestion(rl, item) - to get user input and feed it into data
 *
 * @param {string(?)} rl - user input from process.stdin
 * @param {object} item - single object from data array
 * @return {string} answer to question given from user
*/
const askQuestion = (rl, item) => {
  return new Promise(resolve => {
      rl.question(item.question, (answer) => {
          resolve(answer);
      });
  });
}

/**
 * survey(data)
 *
 * @param {array} data - array of objects {question:'', answer: ''}
 * @return {undeclared} console logs results
*/
const survey = function(data) {
  return new Promise(async resolve => {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for (let i = 0;i < data.length; i++) {
      const result = await askQuestion(rl, data[i]);
      data[i].answer = result;
    }

    let paragraph = paraMake(data);
    console.log(paragraph);

    rl.close();
  })
}

survey(data);
