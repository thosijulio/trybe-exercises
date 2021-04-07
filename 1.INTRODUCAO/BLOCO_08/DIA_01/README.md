# Dia 8.1: Introdução a Higher Order Function (HOF)

## &nbsp; Descrição dos Exercícios - [Parte 1](https://github.com/thosijulio/trybe-exercises/tree/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/Parte%201)

### &nbsp;&nbsp; [Exercicio 1](https://github.com/thosijulio/trybe-exercises/blob/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/Parte%201/PT1%20-%20Exercicio1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passar a função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

 
 ~~~javascript
const newEmployees = () => {
  const employees = {
    id1: // Nome: Julio Thosi -> Chame sua função passando o nome Julio Thosi como parâmetro
    id2: // Nome: Carolina Silva -> Chame sua função passando o nome Carolina Silva como parâmetro
    id3: // Nome: Pablo Fernando -> Chame sua função passando o nome Pablo Fernando como parâmetro
  }
  return employees;
};
~~~

### &nbsp;&nbsp; [Exercicio 2](https://github.com/thosijulio/trybe-exercises/blob/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/Parte%201/PT1%20-%20Exercicio2.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Desenvolver uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

### &nbsp;&nbsp; [Exercicio 3](https://github.com/thosijulio/trybe-exercises/blob/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/Parte%201/PT1%20-%20Exercicio3.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar uma HOF utilizando o conceito de currying . Passar como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). A HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
 * A validação da resposta não deve ser case sensitive.
 * Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

~~~javascript
// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';
~~~

### &nbsp;&nbsp; [Exercicio 4](https://github.com/thosijulio/trybe-exercises/blob/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/Parte%201/PT1%20-%20Exercicio4.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
 * Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
  
~~~javascript
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
~~~

---

## &nbsp; Bônus (Parte 1) - [Game Actions Simulator](https://github.com/thosijulio/trybe-exercises/tree/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/B%C3%B4nus)
<b> Nestes exercícios será implementado HOFs que simulam um turno de batalha em um jogo, com funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. O código abaixo serviu como base para os próximos exercícios propostos. </b><br>

~~~javascript 
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
~~~

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar uma função que retorna o dano do dragão.
 * O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar uma função que retorna o dano causado pelo warrior.
 * O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
 * O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
 * A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

## &nbsp; Bônus (Parte 2) - [Game Actions Simulator](https://github.com/thosijulio/trybe-exercises/tree/exercises/8.1/1.INTRODUCAO/BLOCO_08/DIA_01/B%C3%B4nus)
<b> Após a implementação das funções relativas aos três exercícios anteriores, agora elas serão passadas como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.
O código abaixo serviu como base para os próximos exercícios propostos. </b><br>

~~~javascript
const gameActions = {
  // Crie as HOFs neste objeto.
};
~~~

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Adicionar ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

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
