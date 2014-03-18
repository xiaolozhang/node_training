var http = require('http');

http.createServer(function(req, res) {
  res.setHeader('content-type', 'application/json');

  http.get('http://registry.npmjs.org/-/all', function(npmres) {
    npmres.pipe(res);
    npmres.on('data', function(d) {
      console.log('chunk with %d bytes', d.length);
    });
  });

}).listen(8081);