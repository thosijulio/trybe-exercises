const myRemove = require('./PT1 - Exercicio2');

describe('Testes do Exercício 2', () => {
  test('1. O retorno de "myRemove([1, 2, 3, 4], 3)" retorna "[1, 2, 4]"', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2. O retorno de "myRemove([1, 2, 3, 4], 3)" não retorna "[1, 2, 3, 4]"', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});
