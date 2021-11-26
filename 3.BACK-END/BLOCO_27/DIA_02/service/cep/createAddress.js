const model = require('../../model');

const createAddress = async (address) => {
  const result = await model.cep.createAddress(address);
  console.log(result);
  console.log('teste');
}

module.exports = createAddress;
