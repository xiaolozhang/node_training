var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var server = require('http').createServer(function(req, res) {

  var d = domain.create();

  d.on('error', function(err) {
    res.writeHead(500);
    res.end(err.message);
  });

  d.run(function() {
    setTimeout(function() {
      a.abc();
    }, 500);
  });

}).listen(8000);
