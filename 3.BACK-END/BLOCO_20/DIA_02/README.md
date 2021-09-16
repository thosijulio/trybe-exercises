# Dia 20.2: Encontrando dados em um banco de dados

## &nbsp; Descrição dos Exercícios
Para a realização dos exercícios, foram utilizados do banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/) e dos bancos de dados [Scientists e PiecesProviders](https://creativecommons.org/licenses/by-sa/3.0/), banco de dados de uso livre, conforme indicação.

## [Parte 1](./DIA_02/PRE-AULA/) - Exercícios Pré Aula.

### &nbsp;&nbsp; [Exercicio 1 - SELECT](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/1%20-%20SELECT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
 - Criar uma query que exiba seu nome na tela;
 - Criar uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
 - Criar uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
 - Criar uma query que exiba o resultado de 13 * 8.
 - Criar uma query que exiba a data e hora atuais. Dar a essa coluna o nome "Data Atual".

### &nbsp;&nbsp; [Exercicio 2 - CONCAT](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/2%20-%20CONCAT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.film:
  - Criar uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome "Lançamento do Filme".
  - Criar uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome "Classificação".

Na tabela sakila.address:
  - Criar uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome "Endereço".

### &nbsp;&nbsp; [Exercicio 3 - DISTINCT](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/3%20-%20DISTINCT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  
Na tabela sakila.actor:
  - Criar uma query para encontrar pares únicos de nomes e sobrenomes.
  - Criar uma query para encontrar somente os nomes únicos.
  - Criar uma query para encontrar somente as sobrenomes únicas.

### &nbsp;&nbsp; [Exercicio 4 - COUNT](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/4%20-%20COUNT.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.staff:
  - Criar uma query para encontrar quantas senhas cadastradas existem nessa tabela.
  - Criar uma query para encontrar quantas pessoas cadastradas existem nessa tabela.
  - Criar uma query para encontrar quantos e-mails cadastradas existem nessa tabela.

### &nbsp;&nbsp; [Exercicio 5 - Resumo](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/PRE_AULA/5%20-%20Resumo.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.film:
  - Criar uma query que exiba todos os filmes cadastrados no banco de dados.
  - Criar uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
  - Criar uma query que exiba quantos filmes tem cadastrados.
  - Criar uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordenar os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

Na tabela sakila.actor:
  - Criar uma query que exiba apenas os sobrenomes únicos cadastrados.
  - Criar uma query que exiba sobrenomes únicos tem na tabela.
  - Criar uma query que ordena os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

Na tabela sakila.language:
  - Criar uma query que mostre os 5 idiomas cadastrados, mas não mostre o idioma "english".

## [Parte 2](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/POS-AULA/Exercicios%20Scientists%20DB.sql) - Exercícios Pós Aula.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados Scientists para solucionar os seguintes exercícios:
  - Criar uma query para exibir a string "This is SQL Exercise, Practice and Solution".
  - Criar uma query para exibir três números em três colunas.
  - Criar uma query para exibir a soma dos números 10 e 15.
  - Criar uma query para exibir o resultado de uma expressão aritmética qualquer.
  - Criar uma query para exibir todas as informações de todos os cientistas.
  - Criar uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
  - Criar uma query para exibir o nome dos cientistas em ordem alfabética.
  - Criar uma query para exibir o nome dos Projetos em ordem alfabética descendente.
  - Criar uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
  - Criar uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
  - Criar uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
  - Criar uma query para exibir o nome do projeto com maior quantidade de horas.
  - Criar uma query para exibir o nome do segundo projeto com menor quantidade de horas.
  - Criar uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
  - Criar uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

## [Parte 3](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.2/3.BACK-END/BLOCO_20/DIA_02/BONUS/Exercicio%20PiecesProviders%20DB.sql) - Exercícios Pós Aula - Bônus.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>

Foi utilizado o banco de dados PiecesProviders para solucionar os seguintes exercícios:
  - Criar uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
  - Criar uma query para exibir todas as informações das cinco peças com os maiores preços.
  - Criar uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
  - Criar uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordenar o resultado pelos preços das peças de forma decrescente.
  - Criar uma query para exibir por quantas empresas a peça 1 é provida.

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
