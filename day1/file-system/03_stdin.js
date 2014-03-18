process.stdin.pipe(process.stdout);

process.stdin.on('end', function() {
  process.stdout.write('\ndone\n');
});
