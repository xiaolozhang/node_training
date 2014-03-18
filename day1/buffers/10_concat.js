var buffer1 = new Buffer('hello');
var buffer2 = new Buffer('world');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log(buffer3.toString());

buffer2.fill(0);

console.log(buffer3.toString());
