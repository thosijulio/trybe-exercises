const uppercase = require('./exercicio1.js');

describe('Exercicio 1 - Callback', () => {
  it('O retorno de uppercase transforma todas as letras recebidas em maiusculas', (done) => {
    uppercase('teste', (str) => {
      expect(str).toBe('TESTE');
      done();
    });
  });
});