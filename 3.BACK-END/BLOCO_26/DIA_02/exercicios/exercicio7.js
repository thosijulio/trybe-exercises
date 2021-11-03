const fs = require('fs').promises;

const exerc7 = async () => {
  const characters = JSON.parse( await fs.readFile('./exercicios/simpsons.json', 'utf-8'));
  const newCharacters = characters.filter((character) => character.id == 1 || character.id == 4);
  fs.writeFile('./exercicios/simpsonsFamily.json', JSON.stringify(newCharacters), { flag: 'w' });
}

exerc7();
