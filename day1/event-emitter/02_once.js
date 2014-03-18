var EventEmitter = require('events').EventEmitter;
var emitter =  new EventEmitter();

emitter.once('ping', function() {
  console.log('received ping'); // only called once
});

emitter.emit('ping');
emitter.emit('ping');

