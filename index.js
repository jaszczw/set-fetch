'use strict';
require('dotenv').config({silent: true});

const express = require('express');
const app = express();
const getLegoSetData = require('get-lego-data')();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('client'));
app.use('/libs', express.static('node_modules'));
app.set('view engine', 'ejs');

app.get('/set', function (req, res) {

  if (!req.query.setId) {
    res.status(400).send('Set id must be passed as argument');
    return;
  }

  const setId = req.query.setId;
  getLegoSetData(setId)
    .then(function (result) {
      result = {rebrickable: {}, brickset: {}, allegro: {}, ...result};
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

  const setId = req.params.setId.trim();

  getLegoSetData(setId)
    .then((result) => res.json(result))
    .catch((err) => res.status(500).send(err));
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
