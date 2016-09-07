'use strict';

var rbDataFetch = require('./rebrickable-data-fetch');
var linksGen = require('./links-generator');
var allegroDataFetch = require('./allegro-data-fetch');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('/');
  res.send('/')
});

app.get('/getset/:setId', function(req, response) {
	if(!req.params.setId){
		response.status(400).send('Set id must be passed as argument, @example (/getset/75259)');
	}
	var setId = req.params.setId.split('-')[0];

	getSetById(setId)
		.then((result) => response.json(result))
		.catch((err) => response.status(500).send(err));
});

app.listen(500,function() {
	console.log('listening 500');
});

function getSetById(setId) {
	var rbFetch = rbDataFetch(setId);
	var linksFetch = linksGen(setId);
	var allegroFetch = allegroDataFetch(setId);

	return Promise.all([rbFetch, linksFetch, allegroFetch])
		.then(function (data) {
			var rbData = data[0];
			var linksData = data[1];
			var allegroData = data[2];

			return {
				rebrickable: rbData,
				links: linksData,
				allegro: allegroData
			};
		});
}