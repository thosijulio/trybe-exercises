const name = "Julio";
const birthCity = "Ribeirão Preto";
let birthYear = 1996;

console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear = 2020;

console.log(birthYear);

birthCity = "outroValor";

console.log(birthCity);

// Irá aparecer uma mensagem de erro porque o valor de 'birthCity' não pode ser alterado, pois se trata de uma constante. Se quisermos alterar o valor dela, teremos que transforma-la em uma variável, trocando o 'const' por 'let' na linha 2.
