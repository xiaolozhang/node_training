var buffer = new Buffer(100);

buffer.write('hello ');
buffer.write('world', 6);

console.log(buffer.toString('utf8', 0, 11));
