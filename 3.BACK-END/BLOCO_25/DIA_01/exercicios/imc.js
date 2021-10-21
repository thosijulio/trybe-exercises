const readlineSync = require('readline-sync');

const calcImc = () => {
  const peso = readlineSync.questionFloat('Digite o seu peso: \n');
  const altura = readlineSync.questionFloat('Digite a sua altura: \n');
  const imc = peso / (altura * 2);

  const getImcSituation = (imc) => {
    let response = '';
    if (imc < 18.5 ) response = 'Abaixo do peso (magreza)';
    if (imc >= 18.5 && imc <= 24.9 ) response = 'Peso normal';
    if (imc >= 25 && imc <= 29.9 ) response = 'Acima do peso (sobrepeso)';
    if (imc >= 30 && imc <= 34.9 ) response = 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9 ) response = 'Obesidade grau II'
      else response = 'Obesidade graus III e IV';
    return response;
  };

  console.log(`IMC: ${imc}. ${getImcSituation(imc)}.`);
};

calcImc();

module.exports = { calcImc };
