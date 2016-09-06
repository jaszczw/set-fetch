var soap = require('soap');
var config = require('./config.json');
var allegroWSDL = 'https://webapi.allegro.pl/service.php?wsdl';

module.exports = function(setId) {
    return new Promise(allegroDataFetcher);
}

function allegroDataFetcher(resolve,reject) {
    try {
        soap.createClient(allegroWSDL, function (err, client) {
            client.doGetSellFormAttribs(getFiltersForCat(), function(result) {
                console.log(result);
                resolve(result);
            })

            //client.doGetItemsList(getItemsOptions(), function (result) {
            //    if(!result){
            //        reject(result);
            //        console.log(err);
            //    } else {
            //        console.log(result.response.body);
            //        resolve(result.response.body);
            //    }
            //});
        });
    } catch(error){
        reject(error);
    }
}

function getFiltersForCat() {
    return {
        'countryId': config.allegro.country,
        'webapiKey': config.allegro.webapiKey,
        'catId' : 4
    }
}

function getItemsOptions () {
    return {
        'webapiKey': config.allegro.webapiKey,
        'countryId': config.allegro.country,
        'resultSize' : 1,
        'filterOptions': [{
            'filterId': 'category',
            'filterValueId': '17865',
        }]
    };
};