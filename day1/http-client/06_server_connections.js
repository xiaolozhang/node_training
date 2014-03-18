var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
  server.getConnections(function (err, connections) {
    console.log('connections %d', connections);
  });

  res.end('Node');
});

server.listen(8081, function () {
  console.log('Listening on %d.', this.address().port)
});
