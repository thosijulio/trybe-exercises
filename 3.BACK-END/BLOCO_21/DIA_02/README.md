# Dia 21.2: Descomplicando JOINs, UNIONs e Subqueries

## &nbsp; Descrição dos Exercícios

## [Parte 1](./PRE-AULA/) - Exercícios Pré Aula.

Para a realização dos exercícios 1, 2 e 3, foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/).

### &nbsp;&nbsp; [Exercicio 1 - INNER JOIN](./PRE-AULA/1.INNER-JOIN.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
 - Criar uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou;
 - Criar uma query que exiba o nome, sobrenome e endereço de cada um dos funcionários do banco;
 - Criar uma query que exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora;
 - Criar uma query que exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes;
 - Criar uma query que exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordenar seus resultados por nomes de forma decrescente. Exibir somente os clientes ativos;
 - Criar uma query que exiba o nome, sobrenome e a média de valor paga aos funcionários no ano de 2006. Agrupar pelo nome e sobrenome do funcionário.
 - Criar uma query que exiba o id do ator, nome, id do filme e título do filme.

### &nbsp;&nbsp; [Exercicio 2 - SELF JOIN](./PRE-AULA/2.SELF-JOIN.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
- Criar uma query que exiba os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição;
- Criar uma query que exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

### &nbsp;&nbsp; [Exercicio 3 - UNION / UNION ALL](./PRE-AULA/3.UNION.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  
  - Criar uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Não excluir nenhum funcionário;
  - Criar uma query que exiba a união das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor. Excluir resultados repetidos;
  - Criar uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Excluir resultados repetidos e ordenar em ordem alfabética;
  - Criar uma query que simula uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. A paginação está sendo feita de 15 em 15 resultados e esta seria a 4ª página.

### &nbsp;&nbsp; [Exercicio 4 - EXISTS](./PRE-AULA/4.EXISTS.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  
Foi utilizado o banco de dados "Hotel" para solucionar os seguintes exercícios:
  - Criar uma query que exiba o id e título dos livros que ainda não foram emprestados.
  - Criar uma query que exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
  - Criar uma query que exiba apenas o nome dos clientes que ainda não compraram um carro.
  - Criar uma query que exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

## [Parte 2](./POS-AULA/Exercicios.sql) - Exercícios Pós Aula.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados "Pixar" para solucionar os seguintes exercícios:
  - Criar uma query que exiba as vendas nacionais e internacionais de cada filme;
  - Criar uma query que exiba o número de vendas para cada filme que possui um número maior de vendas internacionais do que vendas nacionais;
  - Criar uma query que exiba os filmes e sua avaliação em ordem decrescente;
  - Criar uma query que exiba todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas;
  - Criar uma query que exiba todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Exibir os nomes dos cinemas em ordem alfabética;
  - Criar duas querys, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que exiba os títulos dos filmes que possuem avaliação maior que 7.5;
  - Criar duas querys, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que exiba as avaliações dos filmes lançados depois de 2009;
  - Criar uma query, com o EXISTS, que exiba o nome e localização dos cinemas que possuem filmes em cartaz;
  - Criar uma query, com o EXISTS, que exiba o nome e localização dos cinemas que não possuem filmes em cartaz.

## [Parte 3](./BONUS/Bonus.sql) - Exercícios Pós Aula - Bônus.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados "Pixar" para solucionar os seguintes exercícios:
  - Criar uma query que exiba todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz;
  - Criar uma query que exiba todos os títulos e duração dos filmes que possuem o mesmo diretor;
  - Criar duas querys, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que exiba o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

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
