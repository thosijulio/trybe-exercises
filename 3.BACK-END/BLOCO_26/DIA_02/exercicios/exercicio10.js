const fs = require('fs').promises;

const phrase = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const exerc10 = async (arr) => {
  const arrPromises = arr.map((word, index) => fs.writeFile(`./exercicios/phrase/file${ index + 1 }.txt`, word));
  
  await Promise.all(arrPromises);
  
  const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']
  
  const joinPhrase = (await Promise.all(fileNames
    .map((file) => fs.readFile(`./exercicios/phrase/${ file }`)))).join(' ');
  
    await fs.writeFile('./exercicios/phrase/fileAll.txt', joinPhrase);
};

exerc10(phrase);
