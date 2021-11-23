const { ObjectId } = require('mongodb');

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) return res.status(500).json({
    error: true,
    message: 'Informar um id válido',
  });
  return next();
};
