'use strict';
var soap = require('soap');
var _ = require('lodash');
var config = require('./private-config.json');
var bricksetWSDL = 'http://brickset.com/api/v2.asmx?WSDL';

module.exports = function (setId) {
  return (new Promise(getBricksetSetData.bind(null, setId)))
      .catch(function (error) {
        console.error('GetBricksetSetData', error);
      });
};

function getBricksetSetData(setId, resolve, reject) {
  soap.createClient(bricksetWSDL, fetchDataFromNewClient);

  function fetchDataFromNewClient(err, client) {
    if (err) {
      reject(err);
    }

    let getSetsParams = getBricksetGetSetDataParams(setId);

    client.checkKey({ apiKey: config.apiKey },
        function handleGetSetsResult(err, result, raw, soapHeader) {
          if (err) {
            reject(err);
          }
        });

    client.getSets(getSetsParams, function handleGetSetsResult(err, result, raw, soapHeader) {
      if (err) {
        reject(err);
      }

      resolve(result || {});
    });
  }
}

function normalizeSetId(setId) {
  return _.includes(setId, '-') ? setId : setId + '-1'; // Lego set series numbering
}

function getBricksetGetSetDataParams(setId) {
  return {
    apiKey: config.apiKey,
    userHash: null,
    query: null,
    theme: null,
    subtheme: null,
    setNumber: normalizeSetId(setId),
    year: null,
    owned: null,
    wanted: null,
    orderBy: null,
    pageSize: null,
    pageNumber: null,
    userName: null,
  };
}
