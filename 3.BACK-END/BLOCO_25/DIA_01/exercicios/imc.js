const readlineSync = require('readline-sync');

const calcImc = () => {
  const peso = readlineSync.questionFloat('Digite o seu peso: \n');
  const altura = readlineSync.questionFloat('Digite a sua altura: \n');
  const imc = peso * (altura / 2);
  console.log(`IMC: ${imc}`);
};

calcImc();

module.exports = { calcImc };
