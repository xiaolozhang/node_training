var server = require('http').createServer();
var closing = false;
var port = process.argv[2] || 9000;

server.on('request', function(req, res) {
  res.setHeader('Connection', 'close'); // turn off keep-alive
  res.end('Hello World!');
  if (! closing) {
    closing = true;
    server.close();
  }
});

server.once('listening', function() {
  console.log('Server listening on port %d', port);
});

server.once('close', function() {
  console.log('Server is closing. Bye bye!');
});

server.listen(port);

