process.on('uncaughtException', function(err) {
  console.log('Caught:', err.message);

  process.exit(1);
});

throw new Error('uncaughtException catches all unhandled exceptions');
