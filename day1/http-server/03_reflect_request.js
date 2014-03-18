var inspect = require('util').inspect;

require('http').createServer(function(req, res) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  var inspected = {
    'url': req.url,
    'method': req.method,
    'headers': req.headers
  };

  res.end(inspect(inspected));
}).listen(8081, function() {
  console.log('server is listening at http://localhost:8081');
});