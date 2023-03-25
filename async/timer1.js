// timer1.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------
Instruction

Implement an alarm clock / timer which will beep after a specified
amount of time has passed. The user can specify an unlimited number
of alarms using command line arguments

ex:
node timer1.js 10 3 5 15 9
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

- No numbers are provided: Easy. It should just not beep at all and end
immediately since no beeps should get scheduled.
- An input is a negative number: Ignore/skip any numbers that are negative.
We can't schedule anything in the past.
- An input is not a number: Ignore/skip these as well, instead of
attempting to call setTimeout with a non-number.
*/

'use strict';

const args = process.argv;
const argArray = args.slice(2);

if (argArray.length > 0) {
  const sorted = argArray.sort((a, b) => a - b );
  for (let time of sorted) {
    if (time>0) {
      setTimeout(function() {
        process.stdout.write('\x07');
        console.log(time, ' seconds');
      }, time * 1000);
    }
  }
}

