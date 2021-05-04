const fetch = require('node-fetch');

function imgDog(url) {
  return fetch(url)
  .then((result) => result.json())
  .then((result) => result.ok ? Promise.resolve(result) : Promise.reject(result));
}

module.exports = {
  imgDog,
};