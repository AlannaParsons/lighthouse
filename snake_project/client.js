// establishes a connection with the game server
/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
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

/*
    const snake = setInterval(slither, 500);
    const startTime = new Date().getTime();
    const maxTime = 8000;

    function slither() {
      conn.write( "Move: up");

      if(new Date().getTime() - startTime > maxTime){
        clearInterval(snake);
        return;
      }
    }*/
  });




//const spinChar = ['\r|   ','\r/   ','\r-   ', '\r\\   '];

//const snake = setInterval(slither, 500);




  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };