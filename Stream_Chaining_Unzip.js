const { error } = require("node:console");
const fs = require("node:fs");
const zlib = require("node:zlib");
const rs = fs.createReadStream("input.zip");
const ws = fs.createWriteStream("unzipped.jpg");

rs.pipe(zlib.createGunzip()).pipe(ws);

ws.on("finish", () => {
  console.log("finished decompression");
});
ws.on("error", (error) => {
  console.log(error.stack);
});
