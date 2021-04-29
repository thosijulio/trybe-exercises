function encode(stringTransformada) {
  stringTransformada = stringTransformada.replace(/a/g, '1');
  stringTransformada = stringTransformada.replace(/e/g, '2');
  stringTransformada = stringTransformada.replace(/i/g, '3');
  stringTransformada = stringTransformada.replace(/o/g, '4');
  stringTransformada = stringTransformada.replace(/u/g, '5');
  return stringTransformada;
}

function decode(stringTransformada) {
  stringTransformada = stringTransformada.replace(/1/g, 'a');
  stringTransformada = stringTransformada.replace(/2/g, 'e');
  stringTransformada = stringTransformada.replace(/3/g, 'i');
  stringTransformada = stringTransformada.replace(/4/g, 'o');
  stringTransformada = stringTransformada.replace(/5/g, 'u');
  return stringTransformada;
}

module.exports = {
  encode,
  decode
};