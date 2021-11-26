const ProductModel = require('../../models/product/productModel');

const update = async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).send(products);
};

module.exports = update;
