const connection = require('../connection');

const find = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return result;
}

module.exports = find;