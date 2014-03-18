var fs = require('fs');
var file = process.argv[2] || __filename

fs.open(file, 'r', function opened(err, fd) {
  if (err) { throw err }

  var buffer = new Buffer(1024),
      length = buffer.length,
      filePosition = parseInt(process.argv[3] || 100, 10);

  fs.read(fd, buffer, 0, length, filePosition, function read(err, bytes) {
      if (err) throw err;
      console.log('just read ' + bytes + ' bytes');
      if (bytes > 0) {
        console.log(buffer.slice(0, bytes).toString());
      }
    }
  );
});