# Dia 8.3: JavaScript ES6 - Higher Order Functions - reduce

## &nbsp; Descrição dos Exercícios
  <b> Exercícios para praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals , objetos e temas dos fundamentos. Considere o array books para a resolução dos exercícios 2, 3 e 4:</b><br>
  
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
Transformar uma matriz de matrizes em uma única matriz.
 
 ~~~javascript
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
~~~

### &nbsp;&nbsp; [Exercicio 2](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio2.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar uma string com os nomes de todas as pessoas autoras.

 ~~~javascript
function allNames() {
  // escreva seu código aqui
}

assert.deepStrictEqual(allNames(), 'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.');
~~~

### &nbsp;&nbsp; [Exercicio 3](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio3.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Calcular a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

~~~javascript
const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
}

assert.strictEqual(averageAge(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 4](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio4.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Encontrar o livro com o maior nome.

~~~javascript
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
~~~

### &nbsp;&nbsp; [Exercicio 5](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_03/exercicio5.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

~~~javascript
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
}

assert.deepStrictEqual(containsA(), 20);
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
Criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. A posição 0 de notas refere-se ao aluno na posição 0 de alunos.

~~~javascript
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
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
