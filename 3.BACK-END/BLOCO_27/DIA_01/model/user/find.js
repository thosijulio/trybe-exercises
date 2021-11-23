const connection = require('../connection');
const { ObjectId } = require('mongodb');

const find = async (id) => {
  if (id) {
    return await (await connection()).collection('user').find({ _id: ObjectId(id) }).toArray();  
  }
  return await (await connection()).collection('user').find().toArray();
};

module.exports = find;
