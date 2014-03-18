var EventEmitter = require('events').EventEmitter;
var emitter =  new EventEmitter();

// register interest in 'ping' events
emitter.on('ping', function firstPingListener() {
  console.log('first listener: ping');
});

// another 'ping' event listener
emitter.on('ping', function secondPinglistener() {
  console.log('second listener: ping');
});

// trigger a 'ping' event
emitter.emit('ping');
emitter.emit('ping');

