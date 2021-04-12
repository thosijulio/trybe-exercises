# Dia 8.5: JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

### &nbsp;&nbsp; [Exercicio 1](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Completar o código abaixo de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
 * Usar spread operator.
 
 ~~~javascript
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(), rectangle[0] * rectangle[1]) // altere a chamada da funcao rectangleArea
});
~~~

### &nbsp;&nbsp; [Exercicio 2](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio2.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar uma função sum que dado um número variável de elementos retorna a soma desses elementos.
 * Usar rest parameter.
 ~~~javascript
const assert = require('assert');

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
~~~

### &nbsp;&nbsp; [Exercicio 3](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio3.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Escrever a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa.
 * Usar object destructuring.
 
~~~javascript
const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
~~~

### &nbsp;&nbsp; [Exercicio 4](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio4.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Escrever uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
* Usar object destructuring.

~~~javascript
const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
~~~

### &nbsp;&nbsp; [Exercicio 5](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio5.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Escrever a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: A função precisa ter apenas uma linha.
 * Usar array destructuring.
 
~~~javascript
const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);
~~~

### &nbsp;&nbsp; [Exercicio 6](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio6.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar a função toObject que, dada uma lista, retorna um objeto representando o carro:
 * Usar array destructuring e abbreviation object literal.
  
~~~javascript
const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });
~~~

### &nbsp;&nbsp; [Exercicio 7](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio7.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Escrever a função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
 * Usar array destructuring.
 
~~~javascript
const assert = require('assert');

const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

// escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');
~~~

### &nbsp;&nbsp; [Exercicio 8](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_08/DIA_05/exercicio8.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Escrever a função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento.
 * Usar default params.
 
~~~javascript
const assert = require('assert');

// escreva greet abaixo

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
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
