var express = require('express');

var app = express();

var server = app.listen(process.env.PORT || 3000, function() {
console.log('listening on port 3000');
});

app.get('/', function(req, res) {
  res.writeHead(200);
  res.write('Hello world!');
  res.end();
});
