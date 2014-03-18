var EventEmitter = require('events').EventEmitter;
var domain = require('domain');

var server = require('http').createServer();
server.on('request', function(req, res) {
  var d = domain.create();
  d.add(req);
  d.add(res);

  d.on('error', function(err) {
    res.writeHead(500);
    res.end(err.message);
  });

  res.emit('error', new Error('halp!'));
});
server.listen(8000);
