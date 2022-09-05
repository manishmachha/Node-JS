var buf1 = new Buffer.from("Hello World");
var buf2 = buf1.slice(2, 7);
console.log(buf2.toString());
