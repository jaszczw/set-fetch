var soap = require('soap');
var configAllegro = require('./config.json').allegro;
var allegroWSDL = 'https://webapi.allegro.pl/service.php?wsdl';

module.exports = function(setId) {
    return new Promise(allegroDataFetcher);

    function allegroDataFetcher(resolve, reject) {
        try {
            soap.createClient(allegroWSDL, allegroClientCreated);
        } catch (error) {
            reject(error);
        }

        function allegroClientCreated(err, client) {
            var soapGetParams = getItemsOptions(setId);

            client.doGetItemsList(soapGetParams, function(err, result, raw, soapHeader) {
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

function getItemsOptions(setId) {
  return {
      webapiKey: configAllegro.webapiKey,
      countryId: configAllegro.country,
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