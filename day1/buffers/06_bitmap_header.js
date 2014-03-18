var fs = require('fs');

fs.readFile(__dirname + '/support/2x16.bmp', function(err, buffer) {
  if (err) {
    throw err;
  }

  // See: http://en.wikipedia.org/wiki/BMP_file_format#Example_1
  if (buffer.toString('ascii', 0, 2) === 'BM') {

    console.log('width:', buffer.readInt32LE(0x12));
    console.log('height:', Math.abs(buffer.readInt32LE(0x16)));
    console.log('color depth:', buffer.readUInt16LE(0x1C));
  }
});
