const {findUserById, getUserName} = require('./exercicio2e3.js');

describe('Testes do exercicio 3 - async/await', () => {
  describe('Quando o id passado por parametro existir', () => {
    it('Retorna o nome do usuario', async () => {
      expect.assertions(1);
      const name = await getUserName(4);
      expect(name).toEqual('Mark');
    });
  });
  
  describe('Quando o id passado não existir', () => {
    it('Retorna erro', async () => {
      expect.assertions(1);
      await expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.'});
    });
  });
}); 