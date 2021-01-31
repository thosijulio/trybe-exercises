## Dia 4.4: JavaScript - Lógica de Programação e Algoritmos

### &nbsp; Descrição dos Exercícios - Exercícios pré-aula

### &nbsp;&nbsp; Exercicio 1.1 - [e1.1.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PRE-AULA/e1.1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Exercícios para fixação do conteúdo de Objetos: <br>
* Crie um objeto 'player' contendo as variáveis listadas abaixo.

~~~javascript
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
~~~

* Acesse a chave 'name' , 'lastName' e 'age' . Concatene as informações para fazer um 'console.log' no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
* Adicione ao objeto a chave 'bestInTheWorld' e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

~~~javascript
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
~~~

* Acesse a chave 'bestInTheWorld' e faça um 'console.log' no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
* Acesse a chave 'medals' e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

### &nbsp;&nbsp; Exercicio 2.1 - [e2.1.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PRE-AULA/e2.1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Crie um loop que percorra cada item do array frutas: <br>

~~~javascript
let frutas = ["Pera", "Banana", "Laranja"];
~~~

### &nbsp;&nbsp; Exercicio 3.1 - [e3.1.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PRE-AULA/e3.1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Pegue os exercícios 1.1 e 2.1 e faça com que todos eles sejam funções de um mesmo arquivo. <br>

### &nbsp; Descrição dos Exercícios - Parte 1: Exercícios pós-aula (Objetos e For/In)

<b>Usando o objeto abaixo, faça os exercícios a seguir: 
 
 ~~~javascript
 let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
~~~

### &nbsp;&nbsp; Exercicio 01 - [e01.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-1/e01.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome
* Valor esperado no console: Bem-vinda, Margarida <br>

### &nbsp;&nbsp; Exercicio 02 - [e02.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-1/e02.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
* Valor esperado no console:

~~~javascript
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  ~~~
  
### &nbsp;&nbsp; Exercicio 03 - [e03.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-1/e03.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Faça um for/in que mostre todas as chaves do objeto <br>
  * Valor esperado no console:

~~~javascript
  personagem
  origem
  nota
  recorrente
~~~

### &nbsp;&nbsp; Exercicio 04 - [e04.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-1/e04.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
  * Valor esperado no console:

~~~javascript
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
~~~
  
### &nbsp;&nbsp; Exercicio 05 - [e05.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-1/e05.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
  * Valor esperado no console:
  
~~~javascript
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
~~~

### &nbsp; Descrição dos Exercícios - Parte 2: Exercícios pós-aula (Funções)

### &nbsp;&nbsp; Exercicio 01 - [e01.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-2/e01.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
* Exemplo de palíndromo: arara <br> <br>
* verificaPalindrome("arara") ;
  * Retorno esperado: true
* verificaPalindrome("desenvolvimento") ;
  * Retorno esperado: false


### &nbsp;&nbsp; Exercicio 02 - [e02.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-2/e02.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Crie uma função que receba um array de inteiros e retorne o índice do maior valor
* Array de teste: [2, 3, 6, 7, 10, 1];
* Valor esperado no retorno da função: 4

### &nbsp;&nbsp; Exercicio 03 - [e03.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-2/e03.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

### &nbsp;&nbsp; Exercicio 04 - [e04.js](https://github.com/thosijulio/trybe-exercises/blob/exercises/4.4/1.INTRODUCAO/BLOCO_04/DIA_04/PARTE-2/e04.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
* Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
* Valor esperado no retorno da função: Fernanda .
  
---  
  
<h3 align=center>Me encontre:</h3>

<p align=center>
<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
 </p>
 
 <h1 align="center">
    <img alt="Trybe" src="https://github.com/thosijulio/trybe-exercises/blob/main/trybe_logo.jpeg" />
</h1>
