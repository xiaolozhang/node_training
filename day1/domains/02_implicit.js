var fs = require('fs');
var domain = require('domain').create();

domain.on('error', function(err) {
  console.log('Caught error', err);
});

domain.run(function() {
  fs.readFile(__filename + '-nonexistant', 'utf8', function(err) {
    if (err) {
      throw err;
    }
  });
});
