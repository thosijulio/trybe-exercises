const uppercase = require('./exercicio1');

describe('Verifica se a funcao uppercase transforma as letras de uma string em letras maiúsculas.', () => {
  it('verifica se a funcao recebe \'ola\' e devolve \'OLA\'', (done) => {
    return uppercase('ola', (str) => {
      try {
        expect(str).toBe('OLA');
        done();
      }
      catch (error) {
        done(error);
      }
    })
  });
});