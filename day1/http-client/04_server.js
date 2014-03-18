require('http').createServer(function(req, res) {
  // just do nothing, we should get a timeout event.
  //res.end('hello node')
}).listen(8081, function () {
  console.log('Listening on %d.', this.address().port)
});
