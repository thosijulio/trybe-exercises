const getRepos = require('./exercicio4');

describe('Testes do exercicio 4', () => {
  it('Verificar se passando uma URL para a funcao getRepos, determinados repositorios são retornados por ela', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos').then((list) => {
      expect(list).toContain('sd-01-week4-5-project-todo-list');
      expect(list).toContain('sd-01-week4-5-project-meme-generator');
    })
  })
})