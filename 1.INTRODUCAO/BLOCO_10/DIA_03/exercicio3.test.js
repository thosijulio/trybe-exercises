const funcExercicio1ao3 = require('./funcaoExercicio1ao3.js');

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    funcExercicio1ao3.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(funcExercicio1ao3.generateRandomNumber(2, 3, 4)).toBe(24);
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalled();
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    funcExercicio1ao3.generateRandomNumber.mockReset();
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalledTimes(0);

    funcExercicio1ao3.generateRandomNumber.mockImplementation(a => a * 2);

    expect(funcExercicio1ao3.generateRandomNumber(5)).toBe(10);
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalled();
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(funcExercicio1ao3.generateRandomNumber).toHaveBeenCalledWith(5);
  });
});
