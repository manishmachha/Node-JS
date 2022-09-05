var http = require("http");
http
  .createServer((req, res) => {
    res.write("Hello");
    res.end(" World");
  })
  .listen(2000);
