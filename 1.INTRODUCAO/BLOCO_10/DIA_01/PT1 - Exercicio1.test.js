const sum = require('./PT1 - Exercicio1.js');

describe('Testes do Exercício 1', () => {
  test('1. O retorno de sum(4, 5) é igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test('2. O retorno de sum(0, 0) é igual a 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
});
