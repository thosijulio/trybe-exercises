# Dia 11.2: Componentes React

## &nbsp; Descrição dos Exercícios
Implementar, de forma simplificada, uma Pokedex. A Pokedex é uma enciclopédia de todos os pokemons na natureza. Para o exercício, a aplicação precisa mostrar todos os pokemons presentes no arquivo data.js.

Implementar dois componentes na aplicação:

1. Pokemon:  Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
 * nome do pokemon;
 * tipo do pokemon;
 * peso médio do pokemon, acompanhado da unidade de medida usada;
 * imagem do pokemon.
 
2. Pokedex : Esse componente representa a enciclopédia de pokemons. Recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.

O gif abaixo simula o comportamento experado da aplicação:

<p align="center">
  <img alt="exemplo de my-pokedex-project" src="./my-pokedex-project.gif">
</p>

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
