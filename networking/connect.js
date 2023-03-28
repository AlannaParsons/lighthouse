// connect.js for fetcher (?)
/*
-------------------------------------------------------------
Alanna Parsons
Lighthouse labs
Mar 27 2023
-------------------------------------------------------------

Instruction
set up connection w given server

*/
//const { IP, PORT } = require("./constants");


// hardcodinf for now =>
// > node fetcher.js http://www.example.edu/ ./index.html

const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: 'www.example.edu',
    port: 80, // hardcode for http:// (fix later)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  return conn;
};
connect();
module.exports = { connect };