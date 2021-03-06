var express = require('express');
var app = express();
var PORT = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req,res) {
  res.send('Hello World');
});

app.listen(PORT, function(err) {
	console.log('Running server on port '+ PORT);
});