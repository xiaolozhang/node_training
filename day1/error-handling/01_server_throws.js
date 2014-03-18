var server = require('http').createServer();
server.on('request', function(req, res) {
  a.abc();
  res.end('Thank you for using our service!');
});
server.listen(8000);
