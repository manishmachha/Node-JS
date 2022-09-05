function hello() {
  console.log("Hello world");
}

var t = setTimeout(hello, 2000);

clearTimeout(t);

