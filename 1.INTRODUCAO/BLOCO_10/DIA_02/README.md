# Dia 10.2: Testes assíncronos com Jest

## &nbsp; Descrição dos Exercícios - Parte 1

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Escrever um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas.

### Código-base para os exercícios 2 e 3:
O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.

~~~javascript
const users = {
: { name: 'Mark' },
: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
~~~

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Fazer um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado (utilizando a sintaxe de Promise), e também um teste para o caso em que o usuário não é encontrado.
 * Ver os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Reescrever o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
 * Utilizar o try/catch para o caso de erro.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , fazer um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

~~~javascript
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
~~~

### &nbsp;&nbsp; Exercicio 5
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Responder qual será a saída desse código (sem executar).

~~~javascript 
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
~~~

### &nbsp;&nbsp; Exercicio 6
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
 1. Adicionar uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar nos testes.
 2. Adicionar uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escrever a função e o teste.

Código base para realizar o exercício:

~~~javascript
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
);

const getAnimal = (name) => {
  // Adicione o código aqui.
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
~~~

---

<h1 align="center">
    <img alt="Trybe" src="https://github.com/thosijulio/trybe-projects/blob/main/trybe-logo.png"/>
</h1>
<h3 align=center>Me encontre:</h3>
<p align=center>
<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
