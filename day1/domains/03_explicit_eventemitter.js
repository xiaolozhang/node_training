var EventEmitter = require('events').EventEmitter
var em = new EventEmitter();
var domain = require('domain').create();

domain.on('error', function(err) {
  console.log('Caught error:', err.message);
});

domain.add(em);
em.emit('error', new Error('an error that will be caught in the domain'));

domain.remove(em);
em.emit('error', new Error('an error that will not be caught in the domain'));
