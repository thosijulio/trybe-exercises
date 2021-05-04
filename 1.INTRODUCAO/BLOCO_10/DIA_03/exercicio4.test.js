const { toUpper, onlyFirstLetter, concatString } = require('./funcoesExercicio4ao5');

jest.mock('./funcoesExercicio4ao5', () => ({
  toUpper: jest.fn().mockImplementation((str) => str.toLowerCase()),
  onlyFirstLetter: jest.fn().mockImplementation((str) => str[str.length - 1]),
  concatString: jest.fn().mockImplementation((strA, strB, strC) => strA + strB + strC),
}));

describe('Testes do exercicio 4', () => {
  it('toUpper foi chamada, retorna o parametro recebido em caixa baixa e recebe determinada string', () => {
    expect(toUpper('TESTE')).toBe('teste');
    expect(toUpper).toBeCalled();
    expect(toUpper).toBeCalledTimes(1);
    expect(toUpper).toBeCalledWith('TESTE');
  });
  it('onlyFirstLetter foi chamada, retorna o ultimo caracter do parametro recebido e recebe determinada string', () => {
    expect(onlyFirstLetter('teste')).toBe('e');
    expect(onlyFirstLetter).toBeCalled;
    expect(onlyFirstLetter).toBeCalledTimes(1);
    expect(onlyFirstLetter).toBeCalledWith('teste');
  });
  it('concatStrings foi chamada, retorna tres strings passadas como parametros concatenadas e foi chamada com determinados parametros', () => {
    expect(concatString('a', 'b', 'c')).toBe('abc');
    expect(concatString).toBeCalled;
    expect(concatString).toBeCalledTimes(1);
    expect(concatString).toBeCalledWith('a', 'b', 'c');
  });
});

