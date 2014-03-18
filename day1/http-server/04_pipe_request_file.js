var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res) {
  var ws = createWriteStream();
  ws.write(req.method + ' ' + req.url + '\n');
  ws.write(JSON.stringify(req.headers) + '\n\n');
  req.pipe(ws);
  res.setHeader('content-type', 'text/plain');
  res.end(ws._file);
});

server.listen(8081, function() {
  console.log('server is listening at http://localhost:8081');
});

function createWriteStream() {
  var file = Math.floor(Math.random() * 999999) + '.txt';
  var ws = fs.createWriteStream(__dirname + '/' + file);
  ws._file = file;
  return ws;
}