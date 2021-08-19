const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);

      if (result) return resolve(result);
      
      reject('Nenhum animal com esse nome!');
    }, 500);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.filter((animal) => animal.age === age);
      
      if (result.length) return resolve(result);
      
      reject('Nenhum animal com essa idade!');
    }, 500);
  })
);

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um aray com todos os animais com a idade', () => (
      findAnimalByAge(2).then((result) => {
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({age: 2, name: 'Soneca', type: 'Dog'});
      })
    ));
  });
  describe('Quando não existe um animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByAge(1000).catch((error) => {
        expect(error).toBe('Nenhum animal com essa idade!')
      })
    })
  })
})