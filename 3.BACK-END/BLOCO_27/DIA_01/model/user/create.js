const connection = require('../connection');

const create = async (user) => {
  const { firstName, lastName, email, password } = user;
  const createdUser = await (await connection()).collection('user').insertOne(user);
  return {
    id: createdUser.insertedId,
    firstName,
    lastName,
    email,
  };
};

module.exports = create;
