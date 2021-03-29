const assert = require('assert');

function removeMiddle (word) {
  for(let index = 0; index < word.lenght; index += 1) {
    if((word.lenght / 2) < index + 1) {
      output = word[index];
      word.splice(index, 1);
      return output;
    }
  }
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);