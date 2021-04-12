const assert = require('assert');

const sum = (...numbers) => {
    let sums = 0;
    numbers.forEach((number) => sums+= number);
    return sums;
}


assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

 