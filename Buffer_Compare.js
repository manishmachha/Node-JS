var buf1 = new Buffer.from("ABCD");
var buf2 = new Buffer.from("ABCDEFGHI");
var result = buf1.compare(buf2);
if (result < 0) {
  console.log(buf1 + " lies at beginning " + buf2);
} else if (result == 0) {
  log(buf1 + " is same as " + buf2);
} else {
  console.log(buf1 + " lies at end of " + buf2);
}
