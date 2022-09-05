var fs = require("fs");
var http = require("http");
http
  .createServer((req, res) => {
    fs.readFile("demoFile1.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  })
  .listen(2000);
