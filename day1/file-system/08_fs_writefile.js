var fs = require('fs');
var path = require('path');
var file = path.join('support', 'out.txt');
var buffer = new Buffer('writing this string');

fs.writeFile(file, buffer, { flag: 'a' }, function(err) {
  if (err) throw err;

  console.log('wrote ' + buffer.length + ' bytes');
});