var buffer = new Buffer(10);

buffer.fill(0);

for (var i=0; i<=9; i+=2) {
  buffer[i] = 0xff;
}

console.log(buffer);
