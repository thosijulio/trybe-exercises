const ProductModel = require('../../models/product/productModel');

const read = async (req, res, next) => {
  const products = await ProductModel.getAll();
  res.status(200).send(products);
};

module.exports = read;
