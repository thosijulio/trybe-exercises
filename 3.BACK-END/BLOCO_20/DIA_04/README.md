# Dia 20.4: Manipulando Tabelas

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_02/PRE-AULA/) - Exercícios Pré Aula.

Para a realização dos exercícios pré-aula, foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/).

### &nbsp;&nbsp; [Exercicio 1 - INSERT](./DIA_04/PRE-AULA/1-INSERT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
 - Criar uma query que insira um novo funcionário na tabela sakila.staff;
 - Criar uma query que insira dois funcionários novos em apenas uma query;
 - Criar uma query que, seleciona os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor;
 - Criar uma query que cadastra três categorias de uma vez só na tabela sakila.category;
 - Criar uma query que cadastre uma nova loja na tabela sakila.store.

### &nbsp;&nbsp; [Exercicio 2 - UPDATE](./DIA_04/PRE-AULA/2-UPDATE.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.actor:
  - Criar uma query que atualiza o primeiro nome de todas as pessoas que possuem o primeiro nome "JULIA" para "JULES";

Na tabela sakila.category:
  - Criar uma query que altera a categoria "Sci-Fi" para "Science Fiction";

Na tabela sakila.film:
  - Criar uma query que atualiza o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20;
  - Criar uma query que, para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

### &nbsp;&nbsp; [Exercicio 3 - DELETE](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/3%20-%20DISTINCT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  
  - Criar uma query para excluir do banco de dados o ator com o nome de "KARL";
  - Criar uma query para excluir do banco de dados os atores com o nome de "MATTHEW";
  - Criar uma query para excluir da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições;
  - Criar uma query para excluir todos os registros das tabelas film_actor e film_category.

## [Parte 2](./DIA_04/POS-AULA/1-Exercises.sql) - Exercícios Pós Aula.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados Pixar para solucionar os seguintes exercícios:
  - Criar uma query para inserir as produções da Pixar abaixo na tabela Movies:
    - Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
    - Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
    - Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
    - WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
  - Criar uma query para alterar o nome do diretor de Procurando Nemo.
  - Criar uma query para adicionar as seguintes informações na tabela BoxOffice:
    - Filme: Procurando Nemo; Classificação: 6.8; Vendas domésticas: 450 milhões; Vendas internacionais: 370 milhões.
  - Criar uma query para corrigir as informações do filme Ratatouille;
  - Criar uma query para inserir novas informações na tabela Box Office;
  - Criar uma query para excluir da tabela Movies o filme "WALL-E";
  - Criar uma query para excluir da tabela Movies todos os filmes dirigidos por Andrew Staton.

## [Parte 3](./DIA_04/BONUS/Bonus.sql) - Exercícios Pós Aula - Bônus.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados Pixar para solucionar os seguintes exercícios:
  - Criar uma query para alterar a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
  - Criar uma query para alterar a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
  - Criar uma query para excluir da tabela Movies todos os filmes com menos de 100 minutos de duração

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
