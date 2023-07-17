const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  console.log("In requestHandler"); // NEW LINE


  const route = `${request.method} ${request.url}`;
   console.log(`route:${route}`);

  switch (route) {
    case "GET /":
      response.write('homepage');
      response.end();
      break;
    case "GET /urls":
      response.write('these are urls?');
      response.end();
      break;
    default:
      response.write('404 page no found');
      response.end();
      break;

  }

  // if (request.url === "/") {
  //   response.end("Welcome!");
  // } else if (request.url === "/urls") {
  //   //response.end("www.lighthouselabs.ca\nwww.google.com");
  // } else {
  //   response.statusCode = 404;
  //   response.end("404 Page Not Found");
  // }

  const responseText = `Requested Path: ${request.url}\nRequest Method: ${request.method}`
  //response.end(responseText);

};

const server = http.createServer(requestHandler);
console.log("Server created"); // NEW LINE

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);


});

console.log("Last line (after .listen call)"); // NEW LINE