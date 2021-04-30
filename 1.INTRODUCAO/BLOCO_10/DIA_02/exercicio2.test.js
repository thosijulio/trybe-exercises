const {findUserById, getUserName} = require('./exercicio2e3.js');

describe('Testes do exercicio 2 - Promise', () => {
  describe('Quando o id passado por parametro existir', () => {
    it('Retorna o nome do usuario', () => {
      expect.assertions(1);
      expect(getUserName(4)).resolves.toBe('Mark');
    })
  });
  describe('Quando o id passado não existir', () => {
    it('Retorna erro', () => {
      expect.assertions(1);
      return getUserName(6).catch((error) => {
        expect(error).toEqual({error: 'User with 6 not found.'});
      });
    });
  });
});