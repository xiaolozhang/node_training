var http = require('http');

//http.globalAgent.maxSockets = 10;

var count = Number(process.argv[2]) || 10;

for (var i=0; i < count; i++) {
  get(i);
}

function get(i) {
  http.get('http://localhost:8081', function(res) {
    res.on('data', function (data) {
      console.log(i + ' ' + data);
    })
  }).on('error', console.error);
}
