var server = require('http').createServer();

server.on('request', function (req, res) {
  console.log('REQUEST: ' + JSON.stringify(req.headers));
  res.end();
});

server.listen(8081, function () {
  console.log('Listening on %d.', this.address().port)
});
