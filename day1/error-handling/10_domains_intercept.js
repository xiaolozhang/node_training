var domain = require('domain');
var fs = require('fs');

var server = require('http').createServer();
server.on('request', function(req, res) {

  var d = domain.create();

  d.on('error', function(err) {
    res.writeHead(500);
    res.end(err.message);      
  });

  fs.readFile('non-existant-file', d.intercept(function(contents) {
    res.end(contents);
  }));

});
server.listen(8000);
