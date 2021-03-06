const assert = require('assert');

function sumAllNumbers(numbers) {
  let output = 0;
  for (index = 0; index < numbers.length; index += 1) {
    output += numbers[index];
  }
  return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);