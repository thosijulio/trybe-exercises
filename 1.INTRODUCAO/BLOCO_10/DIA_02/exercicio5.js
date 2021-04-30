beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

/* Ordem de saídas esperadas:
  1. 1 - beforeEach
  2. 1 - test
  3. 1 - afterEach
  4. 1 - beforeEach
  5. 2 - beforeEach
  6. 2 - test
  7. 2 - afterEach
*/