var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var a;

var server = require('http').createServer();
server.on('request', function(req, res) {

  var d = domain.create();

  d.on('error', function(err) {
    res.writeHead(500);
    res.end(err.message); // respond with the error
  });

  d.run(function() {
    a.abc();
    res.end('Thank you for using our service!');
  });

});
server.listen(8000);
