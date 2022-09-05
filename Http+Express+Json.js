var http = require("http");
var express = require("express");
var fs = require("fs");

var app = express();
var server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World - Express</h1>");
});

app.get("/tasks", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      var tasks = JSON.parse(data.toString()).tasks;
      res.json(tasks);
    }
  });
});

app.post("/tasks1", (req, res) => {
  res.send("Namaste");
});

server.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
