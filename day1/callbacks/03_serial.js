var fs = require('fs');
var maxFileSize = parseInt(process.argv[2], 10) || 400;

fs.stat(__filename, function(err, stats) {
  if (err) throw err;

  if (stats.size < maxFileSize) {
    fs.readFile(__filename, 'utf8', function(err, contents) {
      if (err) throw err;

      console.log(contents);
    });
  } else {
    console.log("Not reading the file, it's too big");
  }
});