const funcExerc1ao3 = require('./funcaoExercicio1ao3.js');
jest.mock('./funcaoExercicio1ao3');

describe('Testes do exercicio 2', () => {
  funcExerc1ao3.generateRandomNumber.mockImplementationOnce((a, b) => a / b);

  it('generateRandomNumber retorna um divisao entre o primeiro e o segundo parametro', () => {
    expect(funcExerc1ao3.generateRandomNumber(10, 2)).toBe(5);
  });
  it('generateRandomNumber foi chamada', () => {
    expect(funcExerc1ao3.generateRandomNumber).toBeCalled();
  });
  it('generateRandomNumber foi chamada apenas uma vez', () => {
    expect(funcExerc1ao3.generateRandomNumber).toBeCalledTimes(1);
  });
  it('generateRandomNumber foi chamada com os parametros 10 e 2', () => {
    expect(funcExerc1ao3.generateRandomNumber).toBeCalledWith(10, 2);
  });
});
