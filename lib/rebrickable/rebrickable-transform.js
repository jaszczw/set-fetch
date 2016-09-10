module.exports = function (rbDataObject) {
  return {
    pieces: rbDataObject.pieces,
    description: rbDataObject.descr,
    theme: rbDataObject.theme,
    img_big: rbDataObject.img_big,
    img_sm: rbDataObject.img_sm,
    img_tn: rbDataObject.img_tn,
    year: rbDataObject.year,
  };
};
