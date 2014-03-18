var array = ["a", 0xBA, 0xDF, 0x00, 0xD0, 255, 10];

var buffer1 = new Buffer(array);
console.log('buffer1', buffer1.length, buffer1);

// other encodings: ascii, utf16le, ucs2, base64, binary, hex
var buffer2 = new Buffer('hello world', 'utf8');
console.log('buffer2', buffer2.length, buffer2.toString());

var buffer3 = new Buffer('68656c6c6f20776f726c64', 'hex');
console.log('buffer3', buffer3.length, buffer3.toString());