const getUserName = require('./exercicio2');

describe('Teste do exercicio 2', () => {
  it('a funcao retorna um usuario quando é chamada com um id existente', async () => {
    await expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('a funcao retorna um erro quando é chamada com um id inexistente', async () => {
    await expect(getUserName(3)).rejects.toThrowError('User with 3 not found.');
  });
})