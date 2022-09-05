var buf1 = new Buffer.from("ABCD");
var buf2 = new Buffer.alloc(10);
buf1.copy(buf2);
console.log(buf2.toString());
console.log("lengh of buf2 is: " + buf2.length);
