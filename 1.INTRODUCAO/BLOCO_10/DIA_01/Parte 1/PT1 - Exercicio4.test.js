const myFizzBuzz = require('./PT1 - Exercicio4.js');

describe('Testes do exercício 4', () => {
  test('1. O retorno de "myFizzBuzz(15)" deve ser "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('2. O retorno de "myFizzBuzz(3)" deve ser "fizz"', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
  test('3. O retorno de "myFizzBuzz(5)" deve ser "buzz"', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });
  test('4. O retorno de "myFizzBuzz(4)" deve ser "4"', () => {
    expect(myFizzBuzz(4)).toEqual(4);
  });
  test('5. O retorno de "myFizzBuzz("teste")" deve ser "false"', () => {
    expect(myFizzBuzz('teste')).toEqual(false);
  });
});
