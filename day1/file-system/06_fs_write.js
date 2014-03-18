var fs = require('fs');
var path = require('path');

fs.open(path.join('support', 'out.txt'), 'a', function opened(err, fd) {
  if (err) throw err;

  var buffer = new Buffer('writing this string');
  var length = buffer.length;

  fs.write(fd, buffer, 0, length, null, function wrote(err, written) {
      if (err) { throw err; }
      console.log('wrote ' + written + ' bytes');
    }
  );
});