var http = require('http');
var url = require('url');

var count = Number(process.argv[2]) || 10;
var options = url.parse('http://localhost:8081');
options.agent = false;

for (var i=0; i < count; i++) {
  get(i);
}

function get(i) {
  http.get(options, function(res) {
    res.on('data', function (data) {
      console.log(i + ' ' + data);
    })
  }).on('error', console.error);
}
