var fs = require('fs');
var maxFileSize = parseInt(process.argv[2], 10) || 400;

function statDone(err, stats) {
  if (err) throw err;

  if (stats.size < maxFileSize) {
    fs.readFile(__filename, 'utf8', readFileDone);
  } else {
    console.log("Not reading the file, it's too big");
  }
}

function readFileDone(err, contents) {
  if (err) throw err;

  console.log(contents);
}

fs.stat(__filename, statDone);