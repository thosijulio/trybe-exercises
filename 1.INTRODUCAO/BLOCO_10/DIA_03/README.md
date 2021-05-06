# Dia 10.3: Jest - Simulando Comportamentos

## &nbsp; Descrição dos Exercícios - Parte 1

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar uma função que gere um número aleatório entre 0 e 100. 
 * Criar os testes para essa função. 
 * Definir o retorno padrão como 10 (Utilizando mock). 
 * Testar se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Com a função do exercício anterior, utilizando o mock, criar uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
 * Essa implementação deve ocorrer uma única vez. 
 * Criar os testes necessários.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Ainda com a mesma função do primeiro exercício, utilizando o mock, criar uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após os testes para ela, resetar sua implementação e criar uma nova, que receba um parâmetro e retorne seu dobro. Fazer os testes necessários.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Dentro de um mesmo arquivo, criar três funções:
 1. Receber uma string e retorná-la em caixa alta. 
 2. Receber uma string e retornar só a primeira letra. 
 3. Receber duas strings e concatená-las. <br>

Fazer o mock do arquivo. Fazer uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

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
Utilizando as mesmas funções do exercício anterior, repetir a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

### &nbsp;&nbsp; Exercicio 6
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar uma função que faça requisição para a api dog pictures. Mockar a requisição e criar dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes necessários.

## &nbsp; Exercício Bônus

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Fazer um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

~~~javascript
{
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200
}
~~~
Código do exercício:
~~~javascript
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};
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
