var event = require("events");
var eventEmitter = new event.EventEmitter();

var lis1 = function listener1() {
  console.log("listener1 executed");
};

var lis2 = function listener2() {
  console.log("listener2 executed");
};

eventEmitter.on("listener", lis1);
eventEmitter.on("listener", lis2);

var eventListeners = event.EventEmitter.listenerCount(eventEmitter, "listener");

console.log(eventListeners + " Listner(s) listening to listener event");

eventEmitter.emit("listener");

eventEmitter.removeListener("listener", lis1);

eventListeners = event.EventEmitter.listenerCount(eventEmitter, "listener");
console.log(eventListeners + " Listner(s) listening to listener event");

eventEmitter.emit("listener");

console.log("program ended");
