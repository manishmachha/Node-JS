const fs = require("node:fs");
const rs = fs.createReadStream("hello.txt");
const ws = fs.createWriteStream("output1.txt");
rs.pipe(ws);

ws.on("finish", () => {
  console.log("finished writing");
});
ws.on("error", (error) => {
  console.log(error.stack);
});
console.log("program ended\n");
