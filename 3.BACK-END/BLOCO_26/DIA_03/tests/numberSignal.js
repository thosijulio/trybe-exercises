const { expect } = require('chai');
const numberSignal = require('../exercicios/numberSignal');

describe('A funcao "numberSignal" devera retornar: ', () => {
  it('Positivo, caso o numero passado como parametro seja positivo.', () => {
    const result = numberSignal(10);
    expect(result).to.be.equal('positivo');
  });
  it('Negativo, caso o numero passado como parametro seja positivo.', () => {
    const result = numberSignal(-1);
    expect(result).to.be.equal('negativo');
  });
  it('Neutro, caso o número passado como parametro seja 0', () => {
    const result = numberSignal(0);
    expect(result).to.be.equal('neutro');
  });
  it('Uma mensagem de erro, caso o parametro informado não seja um número', () => {
    const result = numberSignal('f');
    expect(result).to.be.equal('o valor deve ser um número');
  });
});
