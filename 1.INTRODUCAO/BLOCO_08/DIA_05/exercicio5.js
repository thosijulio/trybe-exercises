const assert = require('assert');

const myList = [1, 2, 3];

// método usando sort (não importa quantos valores possuem o array myList, dará certo);
// const swap = ((myList) => myList.sort((a, b) => b - a));

//método usando array destructuring (proposto pelo exercicio);
const swap = (([a, b, c]) => [c, b, a])

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);