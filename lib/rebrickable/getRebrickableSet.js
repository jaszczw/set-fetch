var _ = require('lodash');
var rp = require('request-promise-native');
var config = require('./private-config.json');

module.exports = function (setId) {
    var uri = '';
    setId = normalizeSetId(setId);
    return getRebrickableSet(setId);
  };

function getRebrickableSet(setId) {
  var params = createRequestParams(setId);

  return rp(params)
      .then((results) => transformResponse(results.pop()))
      .catch(()=>
          new Error('There was an error fetching set ' + setId + ' from rebrickable')
      );
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
  return _.includes(setId, '-') ? setId : setId + '-1'; // Lego set series numbering
}

function transformResponse(rbDataObject) {
  if (!rbDataObject) { return null; }

  return {
    pieces: rbDataObject.pieces,
    description: rbDataObject.descr,
    theme: rbDataObject.theme,
    img_big: rbDataObject.img_big,
    img_sm: rbDataObject.img_sm,
    img_tn: rbDataObject.img_tn,
    year: rbDataObject.year,
  };
}
