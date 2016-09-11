var _ = require('lodash');

module.exports = function (itemsListResults) {
  var listResult = _.extend({}, itemsListResults);
  var itemsList = itemsListResults.itemsList.item;

  itemsList = _.sortBy(itemsList, function (auction) {
    var priceWDelivery = _.find(auction.priceInfo.item, { priceType: 'withDelivery' });
    return +priceWDelivery.priceValue;
  });

  listResult.itemsList = { item: itemsList };

  return listResult;
};
