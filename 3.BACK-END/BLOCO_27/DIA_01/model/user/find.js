const connection = require('../connection');

const find = async (user) => {
  return await (await connection()).collection('user').find().toArray();
};

module.exports = find;
