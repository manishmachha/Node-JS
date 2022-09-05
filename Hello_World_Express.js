var express = require("express");
var server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen("3000", () => {
  console.log("server listening on port 3000");
});
