var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter;

var tick = true;
var count = 0;

setInterval(function() {
  count ++;
  if (tick) emitter.emit('tic', count);
  else emitter.emit('tac', count);
  tick = !tick;
}, 1000);

emitter.on('tic', function(count) {
  console.log('[%d] TIC', count);
});

emitter.on('tac', function(count) {
  console.log('[%d] TAC', count);
});

