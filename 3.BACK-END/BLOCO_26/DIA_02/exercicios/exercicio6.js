const fs = require('fs').promises;

const exerc6 = async () => {
  const characters = JSON.parse( await fs.readFile('./exercicios/simpsons.json', 'utf-8'));
  const newCharacters = characters.filter((character) => character.id != 10 || character.id != 6);
  fs.writeFile('./exercicios/simpsons.json', JSON.stringify(newCharacters), { flag: 'w' });
};

exerc6();