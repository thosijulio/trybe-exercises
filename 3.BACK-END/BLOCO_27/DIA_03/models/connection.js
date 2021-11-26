const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', 
  user: 'thosijulio',
  password: 'Terca231',
  database: 'rest_exercicios'});

module.exports = connection;
