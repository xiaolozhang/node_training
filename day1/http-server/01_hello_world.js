var http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello ');
  res.write('World\n');
  res.end();
});

server.once('listening', function() {
  console.log('server is listening at http://localhost:8081');
});

server.listen(8081);
