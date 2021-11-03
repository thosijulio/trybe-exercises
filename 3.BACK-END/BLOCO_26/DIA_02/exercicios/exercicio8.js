const fs = require('fs').promises;

const exerc8 = async () => {
  try {
    const character = (JSON.parse( await fs.readFile('./exercicios/simpsons.json', 'utf-8'))).find((value) => value.name == 'Nelson Muntz');
    const oldArr = JSON.parse(await fs.readFile('./exercicios/simpsonsFamily.json', 'utf-8'));
    oldArr.push(character);
    fs.writeFile('./exercicios/simpsonsFamily.json', JSON.stringify(oldArr), { flag: 'w' });

  } catch (error) {
    console.log(error);    
  }
}

exerc8();