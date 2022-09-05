var buf1 = new Buffer.from("Hello");
var buf2 = new Buffer.from(" World");
var buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());
