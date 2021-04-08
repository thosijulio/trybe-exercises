# Dia 8.3: JavaScript ES6 - Higher Order Functions - map e filter

## &nbsp; Descrição dos Exercícios
  <b> Exercícios para praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals , objetos e temas dos fundamentos. Considere o array books para a resolução:</b><br>
  
  ~~~javascript
  const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
  ~~~

### &nbsp;&nbsp; [Exercicio 1](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
 * Usar a função map.
 
 ~~~javascript
const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 2](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio2.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Construir um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
 * Usar as funções map e sort

 ~~~javascript
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
}

assert.deepStrictEqual(nameAndAge(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 3](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio3.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 * Usar a função filter;

~~~javascript
const expectedResult = [
 {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
];

function fantasyOrScienceFiction() {
  // escreva seu código aqui
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 4](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio4.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar um array ordenado pelos livros com mais de 60 anos de publicação e ordenar pelo livro mais velho.
 * Usar as funções filter e sort

~~~javascript
const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooks() {
  // escreva seu código aqui
}

assert.deepStrictEqual(oldBooks(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 5](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio5.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

~~~javascript
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 6](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio6.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar um array com o nome de todos os livros com mais de 60 anos de publicação.
  
~~~javascript
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
}

assert.deepStrictEqual(oldBooks(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 7](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio7.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
 * Cada inicial termina com um ponto.
  
~~~javascript
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
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
