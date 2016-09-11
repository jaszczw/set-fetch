var _ = require('lodash');

module.exports = function (itemsListResults) {
  //TODO: Add correct error and exceptions handling.
  if (!itemsListResults.itemsList) {
    return {};
  }

  var listResult = _.extend({}, itemsListResults);
  var itemsList = itemsListResults.itemsList.item;

  itemsList = _.sortBy(itemsList, function (auction) {
    var priceWDelivery = _.find(auction.priceInfo.item, { priceType: 'withDelivery' });
    return +priceWDelivery.priceValue;
  });

  listResult.itemsList = { item: itemsList };

  return listResult;
};
