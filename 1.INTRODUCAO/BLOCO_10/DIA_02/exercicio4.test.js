const getRepos = require('./exercicio4.js');

describe('Testes do exercício 4', () => {
  it('O array obtido atraves do retorno de getRepos precisa contem determinado item', () => {
    return getRepos('https://api.github.com/orgs/tryber/repos')
    .then((list) => {
      expect(list).toContain('sd-01-week4-5-project-todo-list');
      expect(list).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});