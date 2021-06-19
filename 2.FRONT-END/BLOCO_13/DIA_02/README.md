# Dia 13.2: React Router

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_02/comprehension-exercises-router-master "Exercícios de Compreensão") - Exercícios de Compreensão.

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Encapsular o que é retornado pelo App dentro do componente `BrowserRouter`.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar dentro de `BrowserRouter` uma lista contendo 3 links:

 - Um `link` que aponte para o caminho de URL "/" contendo o texto Home;
 - Um `Link` que aponte para o caminho de URL "/about" contendo o texto About;
 - Um `Link` que aponte para o caminho de URL "/users" contendo o texto Users.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Substituir o componente `Home` por um `Route` que mapeia o caminho de URL "/" para Home.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar uma rota que mapeie o caminho de URL "/about" para o componente About.

### &nbsp;&nbsp; Exercicio 5
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Alterar a forma como a correspondência de caminho da URL está sendo feita para renderizar Home, de modo que Home somente seja renderizado se o caminho da URL for exatamente igual a "/".

### &nbsp;&nbsp; Exercicio 6
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar uma rota que mapeie o caminho de URL "/users" para o componente Users.

### &nbsp;&nbsp; Exercicio 7
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
No componente `App` há uma rota que renderiza o componente `Users`. Alterar a forma como ela renderiza o componente `Users`, passando para ele a prop `greetingMessage` com o valor igual a "Good Morning".

### &nbsp;&nbsp; Exercicio 8
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Alterar a rota, definindo o parâmetro chamado `id`. Depois, alterar o componente `Users`, de modo que mostre no parágrafo o valor recebido para o parâmetro id.

### &nbsp;&nbsp; Exercicio 9
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
O componente `App` deve possuir três rotas: uma para renderizar o componente `Home`, outra para renderizar `About`, e outra para renderizar `Users`, sendo que a última faz uso de parâmetro de URL. Encapsular essas 3 rotas em um componente Switch e ordenar as rotas do mais específico para o mais genérico, começando de cima.

### &nbsp;&nbsp; Exercicio 10
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar, no diretório src, um componente chamado `StrictAccess`. Esse componente é de acesso restrito, e ele deve receber um objeto user como props. Se username e password de user for "joao" e "1234", respectivamente, o componente StrictAccess renderiza um parágrafo que diz "Welcome joao!". Caso username ou password não sejam os valores esperados, o componente precisa gerar um alerta dizendo Access denied e redirecionar quem usa sua aplicação para a página principal.

### &nbsp;&nbsp; Exercicio 11
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar no componente App um link que aponte para o caminho de URL "/strict-access" contendo o texto Strict Access;

### &nbsp;&nbsp; Exercicio 12
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar no componente `App` uma rota que mapeie o caminho de URL "/strict-access" para o componente StrictAccess.

## [Parte 2](./DIA_02/exercise-pokedex-router-master "Exercício da Pokédex") - Pokédex.

Exercício para incrementar a Pokedex criada nos dias anteriores, utilizando Router. O gif abaixo simula o comportamento esperado da aplicação:

<p align="center">
  <img src="./pokedex-react-router-example.gif">
</p>

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Ao carregar a aplicação no caminho de URL "/", é preciso que seja mostrada a Pokédex.

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar um link de navegação para o pokémon sendo mostrado pela Pokédex, de forma que quem usar a aplicação consiga clicar no link para ver mais detalhes do pokémon em questão. É preciso passar para a URL um identificador do pokémon (id), de forma que cada pokémon seja unicamente associado com o caminho de URL. 

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar um componente `PokemonDetails` para ser usado na visualização de mais detalhes do pokémon no passo anterior. É preciso que sejam mostradas as seguintes informações:
 - Nome do pokémon;
 - Tipo do pokémon;
 - Peso do pokémon, com sua devida medida de peso;
 - Sumário informativo a respeito do pokémon;
 - Mapa(s) que mostra(m) as possíveis localizações do pokémon.

### &nbsp;&nbsp; Exercicio 4
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar um conjunto fixo de links de navegação no topo da aplicação, de forma que ele esteja sempre disponível para quem fizer uso. De início, adicionar um link que leve quem usa a aplicação de volta para a Pokédex.

### &nbsp;&nbsp; Exercicio 5
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar um componente `About` para ser usado na visualização que explica brevemente o que é uma Pokédex, com alguma imagem ilustrativa.

### &nbsp;&nbsp; Exercicio 6
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Adicionar no conjunto fixo de links de navegação um link que permita levar quem usa a aplicação para a visualização de explicação da Pokédex.

### &nbsp;&nbsp; Exercicio 7
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Criar um componente `NotFound`, de forma que somente ele seja renderizado caso o caminho atual da URL da aplicação não corresponda a rota alguma definida anteriormente.

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
