const { error } = require("node:console");
var fs = require("node:fs");
var data = "Welcome to NodeJS";
let writeStream = fs.createWriteStream("output.txt");
writeStream.write(data,'utf8');
writeStream.end();
writeStream.on("finish", () => {
  console.log("finished writing");
});
writeStream.on("error", (error) => {
  console.log(error.stack);
});
console.log("program ended\n");
