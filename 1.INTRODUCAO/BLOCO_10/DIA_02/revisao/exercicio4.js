const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => data.map((repo) => repo.name));
};

getRepos('https://api.github.com/orgs/tryber/repos')

module.exports = getRepos;