const net = require("net");

const conn = net.createConnection({
  host: 'localhost',
  port: 3000,
  // host: '2.tcp.ngrok.io',
  // port: 18826,
});

conn.setEncoding("utf8"); // interpret data as text

conn.on("data", (data) => {
  console.log("Server says: ", data);
});

conn.on("connect", () => {
  conn.write("Hello from client!");
});
