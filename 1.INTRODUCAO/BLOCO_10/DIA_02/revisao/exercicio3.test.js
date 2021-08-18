const getUserName = require('./exercicio2');

describe('Testes do exercicio 3', () => {
  it('a funcao retorna um usuario quando é chamada com um id existente', () => {
    expect.assertions(1);
    return getUserName(1).then((name) => {
      expect(name).toBe('Mark');
    })
  });
  it('a funcao retorna um erro quando é chamada com um id inexistente', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found')
    })
  });
});