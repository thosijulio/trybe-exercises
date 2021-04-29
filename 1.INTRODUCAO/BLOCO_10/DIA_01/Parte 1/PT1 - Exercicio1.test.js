const sum = require('./PT1 - Exercicio1.js');

describe('Testes do Exercício 1', () => {
  test('1. O retorno de sum(4, 5) é igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('2. O retorno de sum(0, 0) é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('3. Sum deve lançar erro quando passado string por parâmetro', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  test('4. A mensagem de erro é "parameters must be numbers" quando chamar por sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
