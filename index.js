var rbDataFetch = require('./rebrickable-data-fetch');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log('/');
});

app.get('/getset/:setId', function (req, res) {
	console.log('/getset');
	var setId = req.params.setId;
	rbDataFetch(setId)
	.then(function (data) {
		console.log('response',data);
		res.send(JSON.stringify(data));
	});
});

app.listen(500,function (argument) {
	console.log('listening');
});