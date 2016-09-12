var _ = require('lodash');
const priceWithDelivery = { priceType: 'withDelivery' };

module.exports = transformGetItemsList;

function transformGetItemsList(allegroDataResult) {
  return {
    itemsCount: allegroDataResult.itemsCount,
    itemsList: transformItemsList(allegroDataResult.itemsList),
  };
};

function transformItemsList(itemsList) {
  if (!itemsList) {
    return [];
  }

  var auctions = itemsList.item;
  auctions = _.map(auctions, flattenData);
  auctions = orderAuctionsByPrice(auctions);

  return auctions;
}

function flattenData(auction) {
  auction.priceInfo = auction.priceInfo.item;
  auction.photosInfo = auction.photosInfo.item;
  auction.parametersInfo = auction.parametersInfo.item;

  return auction;
}

function orderAuctionsByPrice(auctions) {
  return _.sortBy(auctions, function (auction) {
    var priceData = _.find(auction.priceInfo, priceWithDelivery);
    return +priceData.priceValue;
  });
}
