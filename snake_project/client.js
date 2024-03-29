// client.jf for snake_project
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 26 2023
-------------------------------------------------------------

Instruction
set up connection w given server

*/
const { IP, PORT, userName } = require("./constants");

const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(`Name: ${userName}`);

  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};

module.exports = { connect };