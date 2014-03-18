var http = require('http');

http.get('http://www.google.com/humans.txt', function(res) {
  res.pipe(process.stdout);
});
