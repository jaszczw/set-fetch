var rp = require('request-promise-native');
var config = require('../config').rebrickable;
var transform = require('./rebrickable-transform');

module.exports = function (setId) {
    var uri = '';
    setId = normalizeSetId(setId);
    return getRebrickableSet(setId);
  };

function getRebrickableSet(setId) {
  var params = createRequestParams(setId);

  return rp(params)
      .then((results) => transform(results.pop()))
      .catch(()=> {
          console.log('There was an error fetching set', setId,
              'from rebrickable');
        });
}

function createRequestParams(setId) {
  return {
    uri: 'https://rebrickable.com/api/get_set',
    qs: {
      format: 'json',
      key: config.apiKey,
      set_id: setId,
    },
    headers: {
      'User-Agent': 'Request-Promise',
    },
    json: true,
  };
}

function normalizeSetId(setId) {
  return setId.split('-')[0] + '-1'; // Lego set series numbering
}
