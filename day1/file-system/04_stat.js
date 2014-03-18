var fs = require('fs');
var file = process.argv[2] || __filename;

fs.stat(file, function(err, stats) {
  if (err) throw err;

  console.log(stats, stats.isFile(), stats.isDirectory());
});