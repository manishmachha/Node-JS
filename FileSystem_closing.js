var fs = require("fs");
var buf = new Buffer.alloc(100);
fs.open("hello.txt", "r", function (err, fd) {
  if (err) {
    console.error();
  }

  console.log("file opened successfully\n");
  console.log("going to read the file\n");

  fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
    if (err) {
      console.error();
    }

    console.log(bytes + " bytes read\n");

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
    console.log("");
    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
      }

      console.log("File closed successfully");
    });
  });
});
