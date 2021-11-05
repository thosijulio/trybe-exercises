const { assert, expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;
const writeInFile = require('../exercicios/writeInFile');

describe('A função escreve o conteúdo passado para um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile').resolves;
  });
  after(() => {
    fs.writeFile.restore();
  });
  it('retorna uma string em caso de sucesso', async () => {
    const result = await writeInFile('./exercicios/texto.txt', 'exercicio 4 e 5');
    expect(result).to.be.a('string');
  });
  it('retorna "ok" em caso de sucesso', async () => {
    const result = await writeInFile('./exercicios/texto.txt', 'exercicio 4 e 5');
    expect(result).to.be.equal('ok');
  });
})