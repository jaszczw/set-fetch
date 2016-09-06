var soap = require('soap');
var config = require('./config.json');
var allegroWSDL = 'https://webapi.allegro.pl/service.php?wsdl';

module.exports = function(setId) {
        return new Promise(allegroDataFetcher.bind(null, setId));
      };

function allegroDataFetcher(setId, resolve, reject) {
  try {
    soap.createClient(allegroWSDL, function(err, client) {
        var soapGetParams = getItemsOptions(setId);

        client.doGetItemsList(soapGetParams, function(err, result, raw, soapHeader) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log(result);
            resolve(result);
          }
        });
      });
  } catch (error) {
    reject(error);
  }
}

function getItemsOptions(setId) {
  return {
      webapiKey: config.allegro.webapiKey,
      countryId: config.allegro.country,
      filterOptions: {
          item: [
              getFilterOption('category', '17865'),
              getFilterOption('search', setId),
          ]
      },
      resultSize: 10,
    };
};


function getFilterOption(name, value) {
  return {
      filterId: name,
      filterValueId: {item: value},
    };
}