function toUpper(str) {
  return str.toUpperCase();
}

function onlyFirstLetter(str) {
  return str[0];
}

function concatString(str1, str2) {
  return `${str1} ${str2}`;
}

module.exports = {
  toUpper,
  onlyFirstLetter,
  concatString,
}