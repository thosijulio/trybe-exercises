# Dia 21.2: Descomplicando JOINs, UNIONs e Subqueries

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_02/PRE-AULA/) - Exercícios Pré Aula.

Para a realização dos exercícios pré-aula, foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/).

### &nbsp;&nbsp; [Exercicio 1 - INNER JOIN](./DIA_02/PRE-AULA/1.INNER-JOIN.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
 - Criar uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou;
 - Criar uma query que exiba o nome, sobrenome e endereço de cada um dos funcionários do banco;
 - Criar uma query que exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora;
 - Criar uma query que exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes;
 - Criar uma query que exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordenar seus resultados por nomes de forma decrescente. Exibir somente os clientes ativos;
 - Criar uma query que exiba o nome, sobrenome e a média de valor paga aos funcionários no ano de 2006. Agrupar pelo nome e sobrenome do funcionário.
 - Criar uma query que exiba o id do ator, nome, id do filme e título do filme.

### &nbsp;&nbsp; [Exercicio 2 - SELF JOIN](./DIA_02/PRE-AULA/2.SELF-JOIN.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
- Criar uma query que exiba os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição;
- Criar uma query que exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

### &nbsp;&nbsp; [Exercicio 3 - DELETE](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/3%20-%20DISTINCT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  
  - Criar uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Não excluir nenhum funcionário;
  - Criar uma query que exiba a união das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
  - Criar uma query para excluir da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições;
  - Criar uma query para excluir todos os registros das tabelas film_actor e film_category.

Monte uma query que una 
Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.

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
