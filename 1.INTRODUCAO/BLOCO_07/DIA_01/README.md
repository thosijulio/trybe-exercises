## Dia 7.1: JavaScript ES6 - let, const, arrow functions e template literals

### &nbsp; Descrição dos Exercícios - Parte 1

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Copie o código abaixo:

~~~~javascript
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
~~~~
Fazer modificações na função para que o seu comportamento respeito o escopo no qual cada variável foi declarada.
 * Modificar a estrutura para `arrow function`
 * Modificar concatenações para `template literals`

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Copiar o código abaixo e fazer uma função que retorne o array `oddsAndEvens` em ordem crescente. <br>

~~~javascript
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Código

      console.log(oddsAndEvens);
~~~

 * Utilizar `template literals` para que a chamada `console.log(oddsAndEvens);` retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


### &nbsp; Descrição dos Exercícios - Parte 2

<b>Nos exercícios a seguir, utilizar `let, var, template literals, ternary operator` e `arrow functions`:</b>

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Criar uma função que receba um número e retorne seu fatorial.
* Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
* <b>Bônus:</b> Tentar realizar o exercício de forma recursiva. Resolver com uma linha usando `ternary operator`.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma funcção que receba uma frase e retorne qual a maior palavra.
* Exemplo:
~~~~javascript
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
~~~~~

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma página que contenha:
* Um botão ao qual será associado um event listener ;
* Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
* Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar um código <b>JavaScript</b> com a seguinte especificação:
* Função 1: Receber uma `string` como parâmetro. A função deverá procurar pela letra `x` em uma string qualquer e substituir pela string passada como parâmetro. A função deverá retornar a nova `string`.<br>
<b>Exemplo:</b>
  * String qualquer: "Corinthians X São Paulo"
  * Parâmetro: "ou"
  * Retorno: "Corinthians ou São Paulo"

* Um array com escopo gloval, que é o escopo do arquivo <b>JS</b>, nesse caso, contendo cinco strings.
* Função 2: Receber a string retornada da Função 1 como parâmetro. Esse nova função deverá concatenas o array global à string que foi passada para a Função 2 via parâmetro. Ordenar o array em ordem alfabética. A função deverá retornar esse nova string.<br>
<b>Exemplo:</b>
"Corinthians X São Paulo:
  * 5 Mundiais
  * 4 Libertadores
  * 13 Brasileiros
  * 51 Paulistas".
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
