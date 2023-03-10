/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 10 2023
-------------------------------------------------------------
Instruction

write a function that identifies whether a supposedly chocolate chip
cookie also has raisins in it. Your function, raisinAlarm, will receive
a cookie which is an array of chocolate chips ("🍫"). However, there is a
chance that there might be a pesky raisin in the array as well ("🍇").
Your function must search through the array to see whether or not a raisin
is present.

If your function detects a raisin, it should return "Raisin alert!".
If no raisin is present, your function should return "All good!".
*/

/**
 * raisinAlarm(cookie) - detects raisins
 *
 * @param {array} cookie - an array of strings
 * @return {string} return the correct assessment of raisin presence.
*/
const raisinAlarm = function (cookie) {
  for (let filling of cookie) {
    if (filling === "🍇") {
      return 'Raisin alert!';
    }
  }
  return 'All good!';
};

//TEST
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


/**
 * raisinAlarmArray(cookie) - detects raisins in a whloe damn batch
 *
 * @param {array} cookie - an array of strings
 * @return {array} an array of responses
*/
const raisinAlarmArray = function (cookies) {
  let results = [];
  for (let cookie of cookies) {
    results.push(raisinAlarm(cookie));
  }
  return results;
};

//TEST
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);