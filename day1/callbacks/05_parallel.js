var get = require('http').get;
var terms = ['MSFT', 'AAPL', 'RHT'];
var count = 0;

terms.forEach(function(term) {
  get('http://finance.google.com/finance/info?client=ig&q=' + term, function(res) {

    var responseBody = '';

    // Collect response body
    res.on('data', function(d) {
      responseBody += d.toString();
    });

    res.once('end', function() {
      var obj = JSON.parse(responseBody.replace('//',''));
      console.log(term, '-', obj[0].l);
      if (++ count === terms.length) {
        console.log('done!');
      }
    });
  });
});

