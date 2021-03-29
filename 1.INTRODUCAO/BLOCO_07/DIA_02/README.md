## Dia 7.2: JavaScript ES6 - Objects

### &nbsp; Descrição dos Exercícios - Parte 1 - [Exercicios - PT1.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/7.2/1.INTRODUCAO/BLOCO_07/DIA_02/Exercicios%20-%20PT1.js)

<b> Para os exercícios a seguir, foi usado o seguinte código: </b>

~~~javascript
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
~~~



### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Completar a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". <br>
 * O parâmetro da função já está sendo passado na chamada da função.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Completar a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00." <br>
 * Modificar o nome da pessoa compradora.
 * Modificar o valor total da compra para R$ 50,00.


### &nbsp; Descrição dos Exercícios - Parte 2 - [Exercicios - PT2 + Bonus.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/7.2/1.INTRODUCAO/BLOCO_07/DIA_02/Exercicios%20-%20PT1.js)

<b> Para os exercícios a seguir, foi usado o seguinte código: </b>

~~~javascript
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
~~~

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Criar uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função para mostrar o tamanho de um objeto.
  
### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  
### &nbsp;&nbsp; Exercicio 5
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar um objeto de nome allLessons , que deve agrupar todas as aulas através do `Object.assign`. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando `console.log(allLessons)` , a saída deverá ser a seguinte:

~~~javascript
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
~~~

### &nbsp;&nbsp; Exercicio 6
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função que retorne o número total de estudantes em todas as aulas (usando o objeto criado no exercício 5).

### &nbsp;&nbsp; Exercicio 7
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

~~~javascript
  console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
~~~

### &nbsp;&nbsp; Exercicio 8
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
  
~~~javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
~~~

### &nbsp; Descrição dos Exercícios - Bônus - [Exercicios - PT2 + Bonus.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/7.2/1.INTRODUCAO/BLOCO_07/DIA_02/Exercicios%20-%20PT1.js)

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função para contar quantos estudantes assistiram às aulas de Matemática (usando o objeto criado no exercício 5 - PT2).

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes (usando o objeto criado no exercício 5). Exemplo:

~~~javascript
console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
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
