var domain = require('domain').create();

domain.on('error', function(err) {
  console.log('Caught error:', err.message);
});

var fn = domain.bind(function(err, data) {
  if (err) {
    throw err;
  }

  console.log('Data:', data);
});

fn(null, "some data!");

fn(new Error('there was a problem'));