const { rmSync } = require("node:fs");
var fs = require("node:fs");
var data = "";
var readStream = fs.createReadStream("hello.txt");
readStream.setEncoding("utf-8");

// Handle stream events --> data, end, and error

readStream.on("data", function (chunk) {
  data += chunk;
});

readStream.on("end", () => {
  console.log(data);
});

readStream.on("error", (err) => {
  console.log(err.stack);
});

console.log('Program Ended\n');