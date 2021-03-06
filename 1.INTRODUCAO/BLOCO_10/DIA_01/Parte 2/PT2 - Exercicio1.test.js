const {encode, decode} = require('./PT2 - Exercicio1.js');


describe('Testes do Exerício 1', () => {
  test('Encode e Decode são funções', () => {
    expect(typeof(decode)).toEqual('function');
  });
  test('Encode deve converter "a, e, i, o, u" em "1, 2, 3, 4, 5", respectivamente', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });
  test('Decode deve converter "1, 2, 3, 4, 5" nas vogais "a, e, i, o, u"', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });
  test('Demais letras não são convertidas usando encode', () => {
    const consoantes = 'b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z';
    expect(encode(consoantes)).toEqual(consoantes);
  });
  test('Demais números não são convertidos usando decode', () => {
    expect(decode('6, 7, 8, 9, 0')).toEqual('6, 7, 8, 9, 0');
  });
  test('O parametro passado para encode tem o mesmo numero de caracteres que o retorno', () => {
    expect(encode('amoeba').length).toEqual(('amoeba').length);
  });
  test('O parametro passado para encode tem o mesmo numero de caracteres que o retorno', () => {
    expect(encode('g0l31r0').length).toEqual(('g0l31r0').length);
  });
});
