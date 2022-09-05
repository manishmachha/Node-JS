const { error } = require("node:console");
const fs = require("node:fs");
const zlib = require("node:zlib");
const rs = fs.createReadStream("output.txt");
const ws = fs.createWriteStream("input.zip");

rs.pipe(zlib.createGzip()).pipe(ws);

ws.on("finish", () => {
  console.log("finished compression");
});

ws.on("error", (error) => {
  console.log(error.stack);
});
