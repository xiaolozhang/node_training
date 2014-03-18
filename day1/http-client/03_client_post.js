var http = require('http');
var url = require('url');

var options = url.parse('http://www.google.com/upload');
options.method = 'POST';
console.log('OPTIONS: ' + JSON.stringify(options));

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(err) {
  console.log('problem with request: ' + err.message);
});

// write data to request body
req.write('data\n');
req.end('data\n');
