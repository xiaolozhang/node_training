var fs = require('fs');

function fileReadFinished(err, contents) {
  if (err) {
    console.log('File read error:', err);
  } else {
    console.log(contents);
  }
}

fs.readFile(__filename, 'utf8', fileReadFinished);