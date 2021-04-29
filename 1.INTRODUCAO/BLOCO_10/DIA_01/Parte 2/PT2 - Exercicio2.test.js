const techList = require('./PT2 - Exercicio2.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Julio H. Thosi')).toEqual([
      {
        tech: 'CSS',
        name: 'Julio H. Thosi'
      },
      {
        tech: 'HTML',
        name: 'Julio H. Thosi'
      },
      {
        tech: 'JavaScript',
        name: 'Julio H. Thosi'
      },
      {
        tech: 'Jest',
        name: 'Julio H. Thosi'
      },
      {
        tech: 'React',
        name: 'Julio H. Thosi'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Julio H. Thosi')).toBe('Vazio!');
  });
});
