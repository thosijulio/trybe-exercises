const assert = require('assert');

function wordLengths(word) {
  let wordNumbers = [];
  for(index = 0; index < word.length; index += 1) {
    wordNumbers.push(word[index].length);
  }
  return wordNumbers;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);