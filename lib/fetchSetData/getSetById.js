var rebrickable = require('../rebrickable');
var allegro = require('../allegro');
var brickset = require('../brickset');
var getLinks = require('./getLinks');

module.exports = function (setId) {
    var rbFetch = rebrickable.getRebrickableSet(setId);
    var links = getLinks(setId);
    var allegroFetch = allegro.getSetAuctions(setId);
    var bricksetFetch = brickset.getBricksetSetData(setId);

    return Promise.all([
          rbFetch,
          links,
          allegroFetch,
          bricksetFetch,
      ]).then(function (data) {
            console.log('allPromise');
            var rbData = data[0];
            var linksData = data[1];
            var allegroData = data[2];
            var bricksetData = data[3];

            return {
                rebrickable: rbData,
                links: linksData,
                allegro: allegroData,
                brickset: bricksetData,
              };
          })
        .catch(function (error) {
            console.log(error);
          });
  };
