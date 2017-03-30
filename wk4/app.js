var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>First page!</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.send('<html><head></head><body><h1>Second page!</h1></body></html>');
});

app.get('/404', function(req, res) {
	res.json('404 This page is not found');
});

app.listen(port);