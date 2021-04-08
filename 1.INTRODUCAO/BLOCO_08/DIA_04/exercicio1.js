
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  let newArray = [];
  arrays.reduce((acc, arrays) => {
    arrays.forEach((element) => newArray.push(element));
  }, 0)
  return newArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);