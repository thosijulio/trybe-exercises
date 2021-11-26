const connection = require('../connection');

const createAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const result = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUE (?, ?, ?, ?, ?);',
    [cep, logradouro, bairro, localidade, uf]);
  return 1;
};

module.exports = createAddress;
