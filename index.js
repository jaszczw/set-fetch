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


app.get('/getset/:setId', function(req, res) {
  console.log('/getset');
  var setId = req.params.setId;
  var rbFetch = rbDataFetch(setId);
  var linksFetch = linksGen(setId);
  var allegroFetch = allegroDataFetch(setId);

  Promise.all([rbFetch,linksFetch, allegroFetch])
   .then(function(data) {
    var rbData = data[0];
    var linksData = data[1];
    var allegroData = data[2];

    res.send(JSON.stringify({
      rebrickable: rbData,
      links: linksData,
      allegro: allegroData
    }));
  }).catch((err) => {
    res.send(err);
  });
});

app.listen(500,function() {
  console.log('listening 500');
});