var http = require('http');

http.get('http://www.google.com/search?q=node.js', function(res) {
  res.setEncoding('utf8');

  res.on('readable', function() {
    var data;
    while(data = res.read()) {
      console.log('[chunk] %s', data);
    }
  });

  res.once('end', function() {
    console.log('[ended]');
  });
});