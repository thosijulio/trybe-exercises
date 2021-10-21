const readlineSync = require('readline-sync');

const calcVelMedia = () => {
  const distancia = readlineSync.questionInt('Digite a distância: ');
  const velocidade = readlineSync.questionInt('Digite a velocidade: ');
  console.log(`Velocidade média: ${distancia / velocidade}`);
}

module.exports = calcVelMedia;
