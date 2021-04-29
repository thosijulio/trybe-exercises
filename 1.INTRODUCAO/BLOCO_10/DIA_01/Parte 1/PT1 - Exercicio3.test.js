const myRemoveWithoutCopy = require('./PT1 - Exercicio3.js');

describe('Testes do Exercício 3', () => {
  test('O retorno de "myRemoveWithoutCopy([1, 2, 3, 4], 3)" retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('O retorno de "myRemoveWithoutCopy([1, 2, 3, 4], 3)" não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('O array passado por parâmentro para a função "myRemoveWithoutCopy" não sofreu alterações', () => {
    const arr = [5, 6, 7, 8];
    myRemoveWithoutCopy(arr, 5);
    expect(arr).not.toEqual([5, 6, 7, 8]);
  });
  test('O retorno de "myRemoveWithoutCopy([1, 2, 3, 4], 5)" retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
