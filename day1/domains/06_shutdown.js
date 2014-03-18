var domain = require('domain').create();

domain.on('error', function(err) {
  console.log('Caught:', err.message);
  console.log("now we are in an undefined state");
});

var collect = {};
var performOperation = function(i) {
  collect['timer' + i] = setInterval(function() {
    console.log('tick', i);
  }, 1000);

  if (i>10) {
    throw new Error('simulate thrown exception');
  }
};

var cleanupAfterOperation = function(i) {
  clearInterval(collect['timer' + i]);
  delete collect['timer' + i];
}

domain.run(function() {
  for (var i=0; i<100; i++) {
    performOperation(i);
    cleanupAfterOperation(i);
  }
});
