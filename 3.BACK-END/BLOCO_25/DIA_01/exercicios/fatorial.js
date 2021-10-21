const readlineSync = require('readline-sync');

const fatorial = () => {
  let number = readlineSync.questionInt('Digite um número inteiro: ');
  let fatorial = number;

  for (let index = (number - 1); index > 0; index -= 1) {
    fatorial *= index;
  };

  console.log(`O fatorial de ${number} é: ${fatorial}`);
};

module.exports = fatorial;
