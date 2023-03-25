// typewriter.js
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 25 2023
-------------------------------------------------------------

Instruction
Implement the logic to have each letter delay its appearance by 50ms
(or so) longer than the previous letter.
*/

const sentence = "hello there from lighthouse labs";
const timer = setInterval(callEach, 500);
let i = 0;

function callEach() {
  process.stdout.write(sentence[i++]);
    if (i === sentence.length) clearInterval(timer);
}
