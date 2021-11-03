const fs = require('fs').promises;

fs.readFile('./exercicios/simpsons.json', 'utf-8')
      .then((result) => JSON.parse(result))
      .then((characters) => {
        const character = characters.find((value) => value.id === '1');
        console.log(character);
      });