const toUpper = require('./funcoesExercicio4ao5');

describe('Testes do exercicio 5', () => {
  it('realizar os testes necessarios para a primeira funcao apenas', () => {
    const toLower = jest.spyOn(toUpper, 'toUpper').mockImplementation((a) => a.toLowerCase());
    expect(toLower('TESTE')).toBe('teste');
    expect(toLower).toBeCalled();
    expect(toLower).toBeCalledTimes(1);
    expect(toLower).toBeCalledWith('TESTE');

    toUpper.toUpper.mockRestore();
    
    expect(toUpper.toUpper('teste')).toBe('TESTE');
  });
});