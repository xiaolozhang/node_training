var http = require('http');

var count = Number(process.argv[2]) || 5;

for (var i=0; i < count; i++) {
  http.get('http://localhost:8081', function(res) {
    res.pipe(process.stdout);
  }).on('error', console.error);
}
