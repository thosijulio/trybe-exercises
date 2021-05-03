const funcExerc1ao3 = require('./funcaoExercicio1ao3.js');

describe('Testes do exercicio 1', () => {
  const funcExerc1ao3 = jest.fn().mockReturnValue(10);
  funcExerc1ao3();

  it('a função foi chamada', () => {
    expect(funcExerc1ao3).toBeCalled();
  });
  it('funcExerc1ao3 retorna 10', () => {
    expect(funcExerc1ao3()).toBe(10);
  });
  it('vezes que funcExerc1ao3 foi chamada', () => {
    expect(funcExerc1ao3).toBeCalledTimes(2);
  });
});