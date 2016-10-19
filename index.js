'use strict';
require('dotenv').config({ silent: true });

var express = require('express');
var app = express();
var getLegoSetData;

(function init() {
  getLegoSetData = require('get-lego-data')();
})();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('client'));
app.use('/libs', express.static('node_modules'));
app.set('view engine', 'ejs');

app.get('/set', function (req, res) {

  if (!req.query.setId) {
    res.status(400).send('Set id must be passed as argument');
    return;
  }

  var setId = req.query.setId;
  getLegoSetData(setId)
      .then(function (result) {
        res.render('set-data', result);
      });

});

/**
 * @example
 * /getset/75259
 * /getset/60109-1
 */
app.get('/getset/:setId', function (req, res) {
  if (!req.params.setId) {
    res.status(400).send('Set id must be passed as argument, example (/getset/75259)');
    return;
  }

  var setId = req.params.setId.trim();

  getLegoSetData(setId)
     .then((result) =>  res.json(result))
     .catch((err) => res.status(500).send(err));
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
