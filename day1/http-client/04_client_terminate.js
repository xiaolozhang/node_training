var http = require('http');
var timeout = process.argv[2] || 2000;

var req = http.get('http://localhost:8081', function(res) {
  res.on('data', function(d) {
    console.log('chunk with %d bytes', d.length);
  });
});

req.setTimeout(timeout, function () {
  console.log('request timed out after %dms', timeout);
});

req.on('error', function (err) {
  console.log('error: ', err);
});
