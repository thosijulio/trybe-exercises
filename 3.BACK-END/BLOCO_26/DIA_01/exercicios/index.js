const readlineSync = require('readline-sync');
const imc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');
const fatorial = require('./fatorial');

const mainFunction = () => {
  const resposta = readlineSync.questionInt(`Bem vindo. Escolha o programa desejado:
  1.: Cálculo de IMC;
  2.: Sorteio;
  3.: Cálculo de Velocidade;
  4.: Fatorial.
  
  Opção desejada: `);

  switch (resposta) {
    case 1:
      imc();
      break;
    case 2:
      sorteio();
      break;
    case 3:
      velocidade();
      break;
    case 4:
      fatorial();
      break;
    default:
      console.log('Digite uma opção válida.')
      return mainFunction();
  }
}

mainFunction();
