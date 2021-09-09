# Dia 20.1: Introdução - Back-end / Introdução - Bancos de dados relacionais / Banco de dados SQL

## Parte 1 (Pré Aula) - Exercícios de Fixação.

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Responder as perguntas utilizando como exemplo a imagem a seguir:
  <p align="center"> <img src="https://github.com/thosijulio/trybe-exercises/blob/exercises/20.1/3.BACK-END/BLOCO_20/DIA_01/PRE_AULA/1.png" /></p>
Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder ao seguinte:

  - Quais _constraints_ a coluna **_address_id_** poderia ter? Por quê?
    - **R:** Primary Key, Unique e Not Null. A coluna teria a contraint PK pois se trata de dados que não se repetem e podem ser utilizados para identificação na tabela. E se uma coluna possui a constraint PK, ela obrigatoriamente também teria as contraints Not Null e Unique.
  - A coluna **_city_id_** é um número. Qual tipo de _constraint_ pode ter sido aplicado a ela?
    - **R:** Pode ter sido aplicado uma FK (Foreign Key), pois a coluna pode ser uma primary key de outra tabela, e servirá como uma ligação entre elas.
  - A coluna **_address_** (endereço) possui uma _constraint_. Qual tipo de _constraint_ seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?
    - **R:** A contraint default, que permite um valor padrão caso não seja preenchido algo.
 
 
## Parte 2 (Pós Aula) - Exercícios.

## &nbsp; Descrição dos Exercícios
Exercícios feitos utilizando o banco de dados [**_Sakila_**](https://dev.mysql.com/doc/sakila/en/).

### &nbsp;&nbsp; [Exercicio 1](https://github.com/thosijulio/trybe-exercises/blob/exercises/20.1/3.BACK-END/BLOCO_20/DIA_01/POS_AULA/exercicio1.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Criar uma tabela com as seguintes restrições:<br>
  - Nome da tabela:
    - Filme
  - Colunas:
    - FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
    - Descricao - não permite nulos, tipo texto (varchar(100));
    - AnoLancamento - não permite nulos, tipo int;
    - Nota - permite nulos, tipo int;

### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  - Qual tipo de relacionamento a tabela city faz com a tabela country ?
    - **R:** Relacionamento N:1. Um país (country) pode ter várias cidades, mas uma cidade pode ter apenas um país.

### &nbsp;&nbsp; Exercicio 3
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  - Encontrar três exemplos de um relacionamentos 1:N ou N:1.
    - **R:** 1.º: Address - City; 2.º: Film - Language; 3.º: Payment - Customer.

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
