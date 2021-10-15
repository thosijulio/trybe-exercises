# Dia 22.3: Transformando ideias em um modelo de banco de dados - Parte 2

## &nbsp; Descrição dos Exercícios

Para a realização dos exercícios sobre `VIEW's` (1 a 4) e `INDEX` (5 e 6), foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/). Para a realização do exercícios sobre `ALTER TABLE` (7 a 9), foi disponibilizado o banco de dados "hr".

### &nbsp;&nbsp; [1 - VIEW](./DIA_03/exercicios/exercicio1.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma view `film_with_categories` que exiba o título do filme, o id da categoria e o nome da categoria. Ordenar pelo título do filme.

### &nbsp;&nbsp; [2 - VIEW](./DIA_03/exercicios/exercicio2.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Criar uma view `film_info` que exiba o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Ordenar pelos nomes de atores e atrizes.

### &nbsp;&nbsp; [3 - VIEW](./DIA_03/exercicios/exercicio3.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  Criar uma view `address_info` que exiba o address_id, o address, o district, o city_id e a city. Ordenar pelo nome das cidades.
  
### &nbsp;&nbsp; [4 - VIEW](./DIA_03/exercicios/exercicio4.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma view `movies_languages` que exiba o título do filme, o id do idioma e o idioma do filme.

### &nbsp;&nbsp; [5 - INDEX](./DIA_03/exercicios/exercicio5.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Verificar o impacto de um FULLTEXT INDEX na tabela `category` (coluna `name`). Após adicionar o índice, mensurar o custo da query. Após isso, excluir o índice e mensurar novamente esse custo.
  
  Resolução:
  
  <p align="center">Query com INDEX: </p>
  <p align="center">
    <img alt="comIndex" src="https://github.com/thosijulio/trybe-exercises/blob/main/3.BACK-END/BLOCO_22/DIA_03/exercicios/exercicio5-ExecutionPlanComIndex.png"/>
  </p>
  <p align="center">Query sem INDEX: </p>
  <p align="center">
    <img alt="semIndex" src="https://github.com/thosijulio/trybe-exercises/blob/main/3.BACK-END/BLOCO_22/DIA_03/exercicios/exercicio5-ExecutionPlanSemIndex.png"/>
  </p>
  
### &nbsp;&nbsp; [6 - INDEX](./DIA_03/exercicios/exercicio6.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Verificar o impacto de um INDEX na tabela `address` (coluna `postal_code`). Após adicionar o índice, mensurar o custo da query. Após isso, excluir o índice e mensurar novamente esse custo.
  
  Resolução:
  
  <p align="center">Query com INDEX: </p>
  <p align="center">
    <img alt="comIndex" src="https://github.com/thosijulio/trybe-exercises/blob/main/3.BACK-END/BLOCO_22/DIA_03/exercicios/exercicio6-ExecutionPlanComIndex.png"/>
  </p>
  <p align="center">Query sem INDEX: </p>
  <p align="center">
    <img alt="semIndex" src="https://github.com/thosijulio/trybe-exercises/blob/main/3.BACK-END/BLOCO_22/DIA_03/exercicios/exercicio6-ExecutionPlanSemIndex.png"/>
  </p>
  

### &nbsp;&nbsp; [7 - ALTER TABLE](./DIA_03/exercicios/exercicio7.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma query SQL que altere na tabela `locations` o nome da coluna `street_address` para `address`, mantendo o mesmo tipo e tamanho de dados.

### &nbsp;&nbsp; [8 - ALTER TABLE](./DIA_03/exercicios/exercicio8.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma query SQL que altere na tabela `regions` o nome da coluna `region_name` para `region`, mantendo o mesmo tipo e tamanho de dados.

### &nbsp;&nbsp; [9 - ALTER TABLE](./DIA_03/exercicios/exercicio9.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar uma query SQL que altere na tabela `countries` o nome da coluna `country_name` para `country`, mantendo o mesmo tipo e tamanho de dados.

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
