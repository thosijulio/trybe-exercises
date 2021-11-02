const exercicio1 = require('./exercicio1');

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

exercicio1(num1, num2, num3)
  .then((result) => console.log(result))
  .catch((reject) => console.log(reject));
