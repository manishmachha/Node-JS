var event = require("events");
var eventEmitter = new event.EventEmitter();

var connectionHandler = function connected() {
  console.log("connection successful");
  eventEmitter.emit("data");
};

var dataHandler = function dataReceived() {
  console.log("Data received successfully");
};

eventEmitter.on("connect", connectionHandler);
eventEmitter.on("data", dataHandler);

eventEmitter.emit("connect");
console.log("program ended");
