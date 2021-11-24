const { ObjectId } = require('mongodb');

const connection = require('../connection');

const update = async ({ firstName, lastName, password, email }, id) => {
  const idFormat = ObjectId(id);
  console.log(idFormat);
  const result = await(await connection()).collection('user').findOneAndUpdate(
    {
      _id: ObjectId(id),
    },
    {
      $set: {
        firstName,
        lastName,
        password,
        email,
      },
    },
  );
  console.log(result);
  return result;
};

module.exports = update;
