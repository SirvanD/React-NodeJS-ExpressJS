const http = require("http");

function handleRequest(req, res) {
  console.log(req.url);

  res.write("yaaay");
  res.write("asdfesafrewf");
  res.end("hi there");
}

const server = http.createServer(handleRequest);

server.listen(8080);
