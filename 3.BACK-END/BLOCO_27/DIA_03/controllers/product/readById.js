const ProductModel = require('../../models/product/productModel');

const readById = async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).send(product);
};

module.exports = readById;
