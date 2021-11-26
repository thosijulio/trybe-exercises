const ProductModel = require('../../models/product/productModel');

const remove = async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(204).send(products);
};

module.exports = remove;