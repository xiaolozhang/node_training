var fs = require('fs');
var path = require('path');
var src = process.argv[2] || __filename;
var dest = process.argv[3] || path.join(__dirname, 'support', 'copy.js');

fs.createReadStream(src).pipe(fs.createWriteStream(dest));
