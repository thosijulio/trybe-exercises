const generateRandomNumber = require('./exercicio1.js');

describe('Testes do exercicio 1', () => {
  const generateRandomNumber = jest.fn().mockReturnValue(10);
  generateRandomNumber();

  it('a função foi chamada', () => {
    expect(generateRandomNumber).toBeCalled();
  });
  it('generateRandomNumber retorna 10', () => {
    expect(generateRandomNumber()).toBe(10);
  });
  it('vezes que generateRandomNumber foi chamada', () => {
    expect(generateRandomNumber).toBeCalledTimes(2);
  });
});