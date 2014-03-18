var http = require('http');

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET',
  agent: false
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
});

req.end();
