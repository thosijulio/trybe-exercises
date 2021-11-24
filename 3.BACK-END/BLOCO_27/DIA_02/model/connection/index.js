const mysql = require('mysql2/promise');

let connection = null;

module.exports = connection
  ? connection
  : connection = mysql.createPool({
    user: 'thosijulio',
    database: 'cep_lookup',
    host: 'localhost',
    password: 'Terca231',
  });
  