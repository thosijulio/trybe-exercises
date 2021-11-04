const { expect } = require('chai');
const exerc1 = require('../exercicios/exercicio1');

describe('A funcao "exerc1" devera retornar: ', () => {
  it('Positivo, caso o numero passado como parametro seja positivo.', () => {
    const result = exerc1(10);
    expect(result).to.be.equal('positivo');
  });
});
