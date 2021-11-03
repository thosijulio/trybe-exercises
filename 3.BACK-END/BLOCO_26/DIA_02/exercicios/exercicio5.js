const fs = require('fs').promises;

const exerc5Promise = (id) => {
  return new Promise((resolves, rejects) => {
    fs.readFile('./exercicios/simpsons.json', 'utf-8')
      .then((result) => JSON.parse(result))
      .then((characters) => {
        const character = characters.find((value) => value.id == id);
        if (character) resolves(`${ character.id } - ${ character.name }`);
        rejects('id não encontrado');
      });
  });
};

exerc5Promise(1)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Erro: ${ err }`));


const exerc5Async = async (id) => {
  const characters = JSON.parse( await fs.readFile('./exercicios/simpsons.json', 'utf-8'));
  const character = characters.find((value) => value.id == id);
  if (character) return console.log(`${ character.id } - ${ character.name }`);
  return console.log(`Erro: id não encontrado`);
};

exerc5Async(1);