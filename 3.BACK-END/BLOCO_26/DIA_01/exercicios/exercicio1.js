const readlineSync = require('readline-sync');

const getIMC = () => {

  const height = readlineSync.question('Digite sua altura?\n');
  const weight = readlineSync.questionFloat('Digite seu peso?\n');

  const result = weight / (Math.pow(height, 2));
  let message = '';

  if (result < 18.5 ) message = "Abaixo do peso (magreza)"
  else if (result >= 18.5 && result < 25 ) message = "Peso normal"
  else if (result >= 25 && result < 30 ) message = "Acima do peso (sobrepeso)"
  else if (result >= 30 && result < 35 ) message = "Obesidade grau I"
  else if (result >= 35 && result < 40 ) message = "Obesidade grau II"
  else if (result >= 40 ) message = "Obesidade graus III e IV";

  console.log(`Seu IMC é: ${ weight / (Math.pow(height, 2)) }. Status: ${ message }`);

};

module.exports = getIMC;

