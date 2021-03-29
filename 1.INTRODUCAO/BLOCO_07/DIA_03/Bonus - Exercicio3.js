const assert = require('assert');

function removeMiddle (word) {
  let middle = Math.floor(word.length / 2);
  let output = [word[middle]];
  word.splice(middle, 1);
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);