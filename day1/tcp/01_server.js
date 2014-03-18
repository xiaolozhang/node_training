var server = require('net').createServer();

server.on('connection', function(socket) {
  console.log('new connection from', socket.remoteAddress);

  socket.setEncoding('utf8');

  socket.on('readable', function() {
    var data;
    while(data = socket.read()) {
      console.log(socket.remoteAddress + ':' + socket.remotePort + '>', data);
    }
  });

  socket.once('end', function() {
    console.log(socket.remoteAddress, 'disconnected');
  });
}).listen(8000, function() {
  console.log('TCP server is listening on port 8000');
});
