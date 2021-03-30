/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hofFunction = (rightAnswers, studentAnswers, checkAnswer) => {
  let points = 0;
  for(let index = 0; index < rightAnswers.length; index += 1) {
    points += checkAnswer(rightAnswers[index], studentAnswers[index]);
  }
  return `Nota: ${points}`;
}

const checkAnswer = (rightAnswers, studentAnswers) => {
  if(studentAnswers === 'N.A'){
    return 0;
  }
  else if(studentAnswers === rightAnswers) {
    return 1;
  }
  return -0.5;
}

console.log(hofFunction(rightAnswers, studentAnswers, checkAnswer));