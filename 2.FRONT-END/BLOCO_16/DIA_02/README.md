# Dia 16.2: Usando o Redux no React

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_02/PRE-AULA/) - Exercícios de Compreensão.

### &nbsp;&nbsp; [Exercicio 1](./DIA_02/PRE-AULA/1-missing_store)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em .src/store foi retirado o conteúdo no arquivo index.js. O objetivo é criar o código da store para fazer a aplicação rodar corretamente com React-Redux.

### &nbsp;&nbsp; [Exercicio 2](./DIA_02/PRE-AULA/2-missing_reducers)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/reducers:
Foi retirada a função rootReducer do arquivo index.js;
Foi retirada a função africaContinent do reducer Africa.js;
Foi retirada a função americaContinent do reducer America.js;
Foi retirada a função antarcticaContinent do reducer Antarctica.js;
Foi retirada a função asiaContinent do reducer Asia.js;
Foi retirada a função europeContinent do reducer Europe.js;
Foi retirada a função oceaniaContinent do reducer Oceania.js;

O objetivo é criar o código com o combineReducers no arquivo index.js, e criar as funções dos reducers que são responsáveis por receberem as actions que modificam os estados da aplicação.

### &nbsp;&nbsp; [Exercicio 3](./DIA_02/PRE-AULA/3-missing_actions)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/actions foi retirada a action understandMatrix do arquivo index.js, que deverá receber um type 'PILL_TAKEN' e um 'id' como parâmetro.

O objetivo é criar a action que retornará o objeto com o type e id que serão passados para o reducer.

### &nbsp;&nbsp; [Exercicio 4](./DIA_02/PRE-AULA/4-missing_provider)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/index.js foram retiradas todas as configurações de um Provider. Primeiramente é preciso importá-lo do 'react-redux' e então utilizá-lo para encapsular o App. Passar a store como props para todos os componentes filhos do Provider.

O objetivo é configurar o Provider corretamente para que todos os componentes da aplicação recebam os estados contidos na store.

### &nbsp;&nbsp; [Exercicio 5](./DIA_02/PRE-AULA/5-missing_mapstatetoprops)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/App.js:
Foi retirado o mapStateToProps que recebe um objeto com as chaves receiveIngredients e receiveOrder;
Cada chave é uma props dentro de App.js e representam um estado da aplicação.

Em src/components/PrepareBurger.js:
Foi retirado o mapStateToProps que recebe um objeto com a chave receiveRecipe;
A chave é uma props dentro de PrepareBurger.js e representa um estado da aplicação.
Dica receiveIngredients: o nome do reducer é 'spiedIngredients' e a chave atualizada da action é 'ingredients'.

O objetivo é configurar o mapStateToProps dos componentes App.js e PrepareBurger.js para que eles recebam o estado atualizado da aplicação.

### &nbsp;&nbsp; [Exercicio 6](./DIA_02/PRE-AULA/6-missing_connect)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/App.js e src/components/RescuePeach.js foram retirados o export defaut connect()(), portanto, os componentes não são localizados e não recebem nenhum dado do Redux.

O objetivo é configurar o connect de acordo com a necessidade de cada componente, fazendo a aplicação funcionar com React-Redux.

### &nbsp;&nbsp; [Exercicio 7](./DIA_02/PRE-AULA/7-missing_mapdispatchtoprops)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Em src/pages foi retirado o mapDispatchToProps e o dispatch da página Form.js. 
Criar a função que retorna um objeto de chave selectedOmega. A chave selectedOmega é a função que é recebida como props dentro da aplicação. 
Após declarar a chave, é necessário disparar a ação showMutant através do dispatch.

O objetivo é configurar o mapDispatchToProps e o dispatch para disparar a ação responsável pela alteração do estado da aplicação.

## [Parte 2](./DIA_02/POS-AULA/) - Exercícios Pós Aula.

### &nbsp;&nbsp; [Exercicio 1](./DIA_02/POS-AULA/exercise1)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Usar o Redux para gerenciar o estado do componente TrafficSignal. As funções mapStateToProps e mapDispatchToProps devem ser usadas para conectar o componente ao estado do Redux.

A função renderSignal retorna o src da imagem do sinal de trânsito e recebe como parâmetro uma string que deve vir da store.

O componente TrafficSignal tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

### &nbsp;&nbsp; [Exercicio 1](./DIA_02/POS-AULA/exercise1)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Usar o Redux para gerenciar o estado do componente Cars. As funções mapStateToProps e mapDispatchToProps devem ser usadas para conectar o componente ao estado do Redux.

O reducer deve ter 3 estados, redCar, blueCar e yellowCar e os 3 devem ser booleanos. Ao clicar no botão Move, o estado de seu respectivo carro deve mudar para que o carro ande.

### &nbsp;&nbsp; [Exercicio 3](./DIA_02/POS-AULA/exercise3)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Juntar os 2 reducers anteriores em um único reducer, usando o combineReducers. Talvez haja uma mudança no estado do reduce, então certifique-se que ambos os componentes continuem funcionando após a união.

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
