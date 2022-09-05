var http = require("http");

var server = http.createServer((req, res) => {
  res.write("Hello");
  res.end(req.url);
});

server.listen("3000", () => {
  console.log("server started at 3000");
});
