// timer1.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------
Instruction

Instead of receiving all the timers ahead of time via process.argv,
let's listen for user input and set timers "on demand".

Instruction
Implement a new timer which behaves in the following way:

- The user can press b and it should beep right away
- The user can input any number from 1 to 9 and it should
    -immediately output "setting timer for x seconds...", and
    -beep after that number of seconds has passed
- The user can use ctrl + c to exit the program, at which point the
program should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// will only accept 1 char
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (parseInt(key) && parseInt(key) > 0 && parseInt(key) < 10) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(function() {
      process.stdout.write('\x07');
      console.log('beep');
    }, parseInt(key) * 1000);
  }
});


