var domain = require('domain');
var net = require('net')
var connections = 0;
var server = require('http').createServer(function(req, res) {
  var d = domain.create();

  d.on('error', function(err) {
    console.log('caught error, continuing');
    res.writeHead(500);
    res.end('ERROR:' + err.message + '. ' + connections + ' hanging clients\n');
  });
  
  d.run(function() {
    var conn = net.connect('http://google.com');
    connections++;

    throw new Error('simulated explosion');

    conn.end("GET / \r\n\r\n");
  });
});

server.listen(8000);
