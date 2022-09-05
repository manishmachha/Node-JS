var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1 style='color:red'>Hello world</h1>");
});

server.listen("3000", () => {
  console.log("Server listening on port 3000");
});
