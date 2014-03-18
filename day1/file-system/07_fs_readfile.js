var fs = require('fs');
var file = process.argv[2] || __filename

fs.readFile(file, function(err, bytes) {
  console.log(bytes.toString());
});