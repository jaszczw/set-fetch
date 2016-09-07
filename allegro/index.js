var soap = require('soap');
var configAllegro = require('./../config.json').allegro;
var allegroWSDL = 'https://webapi.allegro.pl/service.php?wsdl';

module.exports = function (setId) {
    return new Promise(allegroDataFetcher);

    function allegroDataFetcher(resolve, reject) {
      soap.createClient(allegroWSDL, fetchDataFromNewClient);

      function fetchDataFromNewClient(err, client) {
        if (err) {
          reject(err);
        }

        let itemsParms = getItemsListParams(setId);

        client.doGetItemsList(itemsParms, function (err, result, raw, soapHeader) {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(result);
            }
          });
      }
    }
  };

function getItemsListParams(setId) {
  return {
      webapiKey: configAllegro.webapiKey,
      countryId: configAllegro.country,
      filterOptions: {
          item: [
              getFilterOption('category', '17865'),
              getFilterOption('search', setId),
              getFilterOption('priceType', 'buyNow')
          ],
        },
      sortOptions : {
        'sortType': 'priceDelivery'
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
