const fs = require('fs').promises;

const exercicio4 = async () => {
  const fileContent = JSON.parse(await fs.readFile('./exercicios/simpsons.json', 'utf-8'));

  fileContent.forEach((character) => console.log(`${ character.id } - ${ character.name }`));
}

exercicio4();