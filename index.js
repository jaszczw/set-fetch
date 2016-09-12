'use strict';
var express = require('express');
var fetchSetData = require('./lib/fetchSetData');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/libs', express.static('node_modules'));

app.get('/', function (req, res) {
  console.log('/');
  res.sendFile(__dirname + '/client/index.html');
});

/**
 * @example
 * /getset/75259
 * /getset/60109-1
 */
app.get('/getset/:setId', function (req, response) {
  if (!req.params.setId) {
    response.status(400).send('Set id must be passed as argument, example (/getset/75259)');
  }

  var setId = req.params.setId;

  fetchSetData.getBySetId(setId)
     .then((result) => response.json(result))
     .catch((err) => response.status(500).send(err));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
