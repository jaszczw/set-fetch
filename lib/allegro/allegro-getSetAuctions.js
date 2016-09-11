var soap = require('soap');
var config = require('./config.json');
var transformItemsList = require('./allegro-transform-getItemsList');
var allegroWSDL = 'https://webapi.allegro.pl/service.php?wsdl';

module.exports = getSetAuctions;

function getSetAuctions(setId) {
  return new Promise(allegroDataFetcher)
      .then(function (results) {
        return transformItemsList(results);
      });

  function allegroDataFetcher(resolve, reject) {
    soap.createClient(allegroWSDL, fetchDataFromNewClient);

    function fetchDataFromNewClient(err, client) {
      if (err) {
        reject(err);
      }

      let itemsParms = getItemsListParams(setId);
      client.doGetItemsList(itemsParms, getResponseHandler(resolve, reject));
    }
  }
};

function getResponseHandler(resolve, reject) {
  return function (err, result, raw, soapHeader) {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      resolve(result);
    }
  };
}

function getItemsListParams(setId) {
  return {
      webapiKey: config.webapiKey,
      countryId: config.country,
      filterOptions: {
          item: [
              getFilterOption('category', '17865'),
              getFilterOption('search', setId),
              getFilterOption('offerType', 'buyNow'),
              getFilterOption('128068', '3'), //Only whole sets
          ],
        },
      sortOptions: {
          sortType: 'priceDelivery',
        },
      resultSize: 10,
    };
}

function getFilterOption(name, value) {
  return {
      filterId: name,
      filterValueId: { item: value },
    };
}
