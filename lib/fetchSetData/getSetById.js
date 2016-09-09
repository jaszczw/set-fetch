var rebrickable = require('../rebrickable');
var allegro = require('../allegro');
var getLinks = require('./getLinks');

module.exports = function (setId) {
    var rbFetch = rebrickable.getRebrickableSet(setId);
    var links = getLinks(setId);
    var allegroFetch = allegro.getSetAuctions(setId);

    return Promise.all([rbFetch, links, allegroFetch])
        .then(function (data) {
            var rbData = data[0];
            var linksData = data[1];
            var allegroData = data[2];

            return {
                rebrickable: rbData,
                links: linksData,
                allegro: allegroData,
              };
          })
        .catch(function (error) {
            console.log(error);
          });
  };
