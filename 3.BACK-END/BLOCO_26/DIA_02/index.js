const fs = require('fs').promises;

fs.readFile('./exercicios/teste.txt', 'utf-8')
  .then((fileContent) => {
  console.log(fileContent);
  });
