const exercicio1 = require('./exercicio1.js');
jest.mock('./exercicio1');

describe('Testes do exercicio 2', () => {
  exercicio1.generateRandomNumber.mockImplementationOnce((a, b) => a / b);

  it('generateRandomNumber retorna um divisao entre o primeiro e o segundo parametro', () => {
    expect(exercicio1.generateRandomNumber(10, 2)).toBe(5);
  });
  it('generateRandomNumber foi chamada', () => {
    expect(exercicio1.generateRandomNumber).toBeCalled();
  });
  it('generateRandomNumber foi chamada apenas uma vez', () => {
    expect(exercicio1.generateRandomNumber).toBeCalledTimes(1);
  });
});