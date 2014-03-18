var buffer = new Buffer('some data');
var buffer2 = buffer.slice(0,1)

console.log(buffer2);

buffer[0] = 0xff;

console.log(buffer2);
