var dns = require('dns');
var hostname = process.argv[2] || 'google.com';

dns.lookup(hostname, function(err, address, family) {
  if (err) {
    console.log('error looking up', err.message);
  } else {
    console.log(hostname, 'resolved to %s (IPv%s)', address, family);
  }
});
