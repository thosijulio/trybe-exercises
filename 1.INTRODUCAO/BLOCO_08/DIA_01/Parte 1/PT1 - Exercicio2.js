const testeSorteio = (numero, numeroSorteio) => numero === numeroSorteio;

function resultadoSorteio(numero, functionCheck) {
  let numeroSorteio = Math.floor(Math.random() * 4 + 1);
  return functionCheck(numero, numeroSorteio) ? 'Parabens, você ganhou!' : 'Tente novamente';
}

console.log(resultadoSorteio(4, testeSorteio));
