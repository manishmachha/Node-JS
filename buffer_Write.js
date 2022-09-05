var buf1 = new Buffer.from([97, 98, 99, 100, 101]);
console.log(buf1.toString());

var buf2 = new Buffer.alloc(10);
var len = buf2.write("12345678910111213");

console.log(buf2.toString());
console.log(`length of buf2 is ${len}`);
console.log(buf2.toString("utf8", 0, 5));
console.log(buf2.toString("ascii", 5, 10));

var buf3 = new Buffer.alloc(20);
for (var i = 0; i < 20; i++) {
  buf3[i] = i;
}
console.log(buf3.toString("ascii"));
console.log(buf3.toJSON());
