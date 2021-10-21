const readlineSync = require('readline-sync');

const sorteio = () => {
  const numeroAleatorio =  Math.floor(Math.random() * (10 - 0 + 1));
  let playAgain = true;
  
  do {
    const numeroEscolhido = readlineSync.questionInt('Escolha um numero de 0 a 10: ');
    if (numeroEscolhido === numeroAleatorio) console.log('Parabéns, você acertou!')
    else console.log(`Opa, não foi dessa vez. O número sorteado foi ${numeroAleatorio}`);
    playAgain = readlineSync.questionInt('Deseja jogar novamente? (Digite "1" para sim e "0" para não): ');
  } while (playAgain);
}

module.exports = sorteio;
