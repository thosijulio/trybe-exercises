const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017';
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const DB_NAME = 'model_example';

let connection = null;

module.exports = async () => {
  try {
    return connection
    ? connection
    : connection = (await MongoClient.connect(URL, OPTIONS)).db(DB_NAME); 
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}