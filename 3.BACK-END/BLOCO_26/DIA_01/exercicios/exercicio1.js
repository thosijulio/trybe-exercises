const readlineSync = require('readline-sync');

const getIMC = () => {

  const height = readlineSync.question('Digite sua altura?\n');
  const weight = readlineSync.questionFloat('Digite seu peso?\n');

  console.log(`Seu IMC é: ${ weight / (Math.pow(height, 2)) }`);
};

module.exports = getIMC;
