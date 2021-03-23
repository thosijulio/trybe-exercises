/* Parte 1 */

//exercicio 1
const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  escopo ? console.log(`${ifScope} ótimo, fui utilizada no escopo`) : console.log(`não devo ser utilizada for do meu escopo (else)`);
}

testingScope(true);

//exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrayCrescente = (array) => console.log(`Os números ${array.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

arrayCrescente(oddsAndEvens);

/* Parte 2 */

//exercicio 1
const descobrirFatorial = (numero) => numero > 1 ? numero * descobrirFatorial(numero - 1) : 1;

console.log(descobrirFatorial(1));

//exercicio 2
const longestWord = (string) => {
  var arrayStr = string.split(" ");
  var maior = 0;
  var palavra = null;
  arrayStr.forEach((str) => {
      if (maior < str.length) {
          maior = str.length;
          palavra = str;
      }
  });
  return palavra;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));