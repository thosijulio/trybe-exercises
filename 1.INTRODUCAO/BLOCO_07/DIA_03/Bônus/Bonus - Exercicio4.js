const getLargestNumber = (array) => {
  let largestNumber;
  for (let index = 0; index < array.length - 1; index += 1) {
    if (array[index] > array[index + 1]) {
      largestNumber = array[index];
    }
    else {
      largestNumber = array[index + 1];
    }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const assert = require('assert');

assert.strictEqual(typeof (getLargestNumber), 'function');
assert.strictEqual(getLargestNumber(parameter), result);
