# Dia 20.3: Filtrando dados de forma específica

## &nbsp; Descrição dos Exercícios
Para a realização dos exercícios, foram utilizados do banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/) e o banco de dados [Scientists](https://creativecommons.org/licenses/by-sa/3.0/), banco de dados de uso livre, conforme indicação.

## [Parte 1](./DIA_03/PRE-AULA/) - Exercícios Pré Aula.

### &nbsp;&nbsp; [Exercicio 1 - WHERE](./PRE-AULA/1-WHERE.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.customer:
  - Criar uma query que exiba todas as informações do cliente com o email 'LEONARD.SCHOFIELD@sakilacustomer.org';
  - Criar uma query que exiba os nomes dos clientes, em ordem  alfabética, que não estão ativos no sistema e pertencem à loja com id = 2, e que também não inclua o cliente Kenneth no resultado;
  - Criar uma query que exiba quantos cliente estão ativos e na loja 1;
  - Criar uma query que exiba todas as informações do clientes não ativos na loja 1;

Na tabela sakila.film:
  - Criar uma query que exiba o título, descrição, ano de lançamento e valor de custo de substituição, dos 100 filmes com maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que tem o custo de substituição de pelo menos $18,00 dólares. Ordenar por ordem alfabética de título, caso dê empate.
  - Criar uma query que exiba todas as informações de 50 filmes feitos apenas para adultos com a menor taxa de aluguel. Em caso de empate, ordenar em ordem alfabética pelo título.

### &nbsp;&nbsp; [Exercicio 2 - LIKE](./PRE-AULA/2-LIKE.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.film:
  - Criar uma query que exiba todos os detalhes dos filmes que contêm a palavra ace no nome;
  - Criar uma query que exiba todos os detalhes dos filmes cujas descrições finalizam com china;
  - Criar uma query que exiba todos os detalhes dos filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord;
  - Criar uma query que exiba todos os detalhes dos filmes que, a partir do 4° caractere no título do filme, tem-se a palavra gon;
  - Criar uma query que exiba todos os detalhes dos filmes que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary;
  - Criar uma query que exiba todos os detalhes dos filmes cujos títulos ou finalizam com academy ou iniciam com mosquito;
  - Criar uma query que exiba todos os detalhes dos filmes que contêm as palavras monkey e sumo em suas descrições.

### &nbsp;&nbsp; [Exercicio 3 - IN / BETWEEN](./PRE-AULA/3-IN-BETWEEN.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  
Na tabela sakila.customer:
  - Criar uma query que exiba o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: Hicks, Crawford, Henry, Boyd, Mason, Morales e Kennedy, ordenados por nome em ordem alfabética;
  - Criar uma query que exiba o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética;

Na tabela sakila.payment:
  - Criar uma query que exiba todas as informações dos pagamentos que foram feitos entre 01/05/2005 e 01/08/2005;

Na tabela sakila.film:
  - Criar uma query que exiba o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Ordenar por filmes com maior duração de empréstimo primeiro. Em caso de empate, ordenar em ordem alfabética pelo título;
  - Criar uma query que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Ordenar por título.

## [Parte 2](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.3/3.BACK-END/BLOCO_20/DIA_03/POS-AULA/Exercicios%20Scientists%20DB.sql) - Exercícios Pós Aula.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados Scientists para solucionar os seguintes exercícios:
  - Criar uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome;
  - Criar uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordenar em ordem alfabética;
  - Criar uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordenar o resultado em ordem alfabética;
  - Criar uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1;
  - Criar uma query para exibir todas as informações de todos os projetos com mais de 500 horas;
  - Criar uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800;
  - Criar uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A;
  - Criar uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

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
