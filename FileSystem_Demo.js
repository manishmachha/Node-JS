var fs = require("node:fs");

// Asynchronous read
fs.readFile("hello.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("Asynchronous read: " + data.toString());
    console.log();
  }
});

// Synchronous read
var Data = fs.readFileSync("hello.txt");
console.log("Synchronous read: " +Data.toString());

console.log("\nprogram ended\n");
