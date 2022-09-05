var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var data = { people: [] };

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/people", (req, res) => {
  res.json(data);
  res.end();
});

app.post("/people", (req, res) => {
  if (req.body && req.body.Name) {
    data.people.push({ Name: req.body.Name, Age: req.body.Age });
  }
  console.log(req.body.Name);
  res.json(data);
  res.end();
});

app.delete("/people", (req, res) => {
  if (req.body && req.body.Name) {
    data.people.pop({ Name: req.body.Name });
  }
  console.log(req.body.Name);
  res.json(data);
  res.end();
});

app.listen("3000", () => {
  console.log("Server started");
});
