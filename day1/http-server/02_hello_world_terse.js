var http = require('http');

http.createServer(function(req, res) {
  res.setHeader('content-type', 'text/plain');
  res.end('Hello World\n');
}).listen(8081, function() {
  console.log('server is listening at http://localhost:8081');
});