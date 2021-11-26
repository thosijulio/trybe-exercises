const ProductModel = require('../../models/product/productModel');

const create = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
};

module.exports = create;
