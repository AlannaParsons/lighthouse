// input.js for snake_project
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 26 2023
-------------------------------------------------------------

Instruction
uses connect() @ client.js
and
setupInput() @ input.js
to launch game and handle input from user

*/

//const net = require("net");
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
const tcpObj = connect();

setupInput(tcpObj);


