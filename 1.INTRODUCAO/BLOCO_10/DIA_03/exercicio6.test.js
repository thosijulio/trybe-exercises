let { imgDog } = require("./funcaoExercicio6.js");
describe("testando a requisição", () => {
  imgDog = jest.fn();
  afterEach(imgDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    imgDog.mockResolvedValue("request sucess");

    imgDog();
    expect(imgDog).toHaveBeenCalled();
    expect(imgDog).toHaveBeenCalledTimes(1);
    expect(imgDog()).resolves.toBe("request sucess");
    expect(imgDog).toHaveBeenCalledTimes(2);
  });

  test('testando a requisição caso a promise seja rejeitada', async () => {
    imgDog.mockRejectedValue('request failed');

    imgDog();
    expect(imgDog).toHaveBeenCalled();
    expect(imgDog).toHaveBeenCalledTimes(1);
    expect(imgDog()).rejects.toBe('request failed');
    expect(imgDog).toHaveBeenCalledTimes(2);
  });
});