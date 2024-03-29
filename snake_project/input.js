// input.js for snake_project
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 26 2023
-------------------------------------------------------------

Instruction
get input from user to check and sent to server

// Stores the active TCP connection object.
// ... not ideal?

*/

let connection;
const { hotkeys } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    console.log('hard shut');
    process.exit();
  }
  if (Object.keys(hotkeys).includes(data)) {
    connection.write(hotkeys[data]);
  }

};





module.exports = { setupInput };