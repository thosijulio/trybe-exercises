const fs = require('fs').promises;

const writeInFile = async (path, content) => {
  try {
    await fs.writeFile(path, content, { flag: 'wx' });
    return 'ok';
  } catch(err) {
    return ('erro ao escrever arquivo');
  };
};

module.exports = writeInFile;