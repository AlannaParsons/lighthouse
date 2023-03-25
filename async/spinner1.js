// spinner1.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------

Instruction
Let's practice some more with setTimeout, this time creating a
low-fidelity loading spinner.

Each character is a delayed write, using setTimeout

With each delayed write, we start with returning the cursor to the beginning

We then write the next character in the animation

Spaces are added after the character so that the cursor moves far enough away from our animation

Removing the space padding at the end of the strings will mean that the cursor
will sit on top of the animation, making it harder to see


set spinning based on amount of runtime -
https://stackoverflow.com/questions/9136261/how-to-make-a-setinterval-stop-after-some-time-or-after-a-number-of-actions#:~:text=To%20stop%20it%20after%20running,reached%20that%20number%20clear%20it.
*/

const startTime = new Date().getTime();
const maxTime = 8000;
const spinChar = ['\r|   ','\r/   ','\r-   ', '\r\\   '];
const spinning = setInterval(spinner, 500);
let count = 0;

function spinner() {
  let index = (count) % spinChar.length;
  count++;
  process.stdout.write(spinChar[index]);

  if(new Date().getTime() - startTime > maxTime){
    clearInterval(spinning);
    return;
  }

}
