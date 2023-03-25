// hello_timeout.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------

Instruction
- Have our file print out these three words 4311o th3r3 w0r1d three
seconds after the file is run.


- Instead of printing the entire sentence together, have our code print
out each of the three words one at a time, 1 second apart.

It's okay if each of the words appears on a separate line, due to console.log.

** help w nested timers
https://stackoverflow.com/questions/17574571/nested-settimeout-alternative
*/

// FUNCTION
/**
 * helloTimer() -
 *
 * async func
 *
 * @return {undefined} console.log to terminal
*/
const helloTimer = function(){
  let string = '4311o th3r3 w0r1d';
  let words = string.split(' ');
  let i = 0;
  const timer = setInterval(callEach, 1000);

//part 1
  setTimeout(() => {
    console.log(string);
  }, 3030);

// part 2
  function callEach() {
    console.log(words[i++]);
      if (i === words.length) clearInterval(timer);
  }

}

helloTimer();