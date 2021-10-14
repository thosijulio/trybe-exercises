# Dia 21.3: Stored Routines & Stored Functions

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_03/PRE-AULA/) - Exercícios Pré Aula.

Para a realização dos exercícios pré-aula 1 e 2, foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/). Para a realização do exercício 3 (Triggers), foi disponibilizado o banco de dados "betrybe_automoveis".

### &nbsp;&nbsp; [1 - STORED PROCEDURES](./DIA_03/PRE-AULA/1.STORED-PROCEDURES.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  - Criar uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
  - Criar uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, titulo, id da categoria e o nome da categoria selecionada.
  - Criar uma procedure que receba o email de um cliente como parâmetro de entrada e retornar se o cliente está ou não ativo, através de um parâmetro de saída.

### &nbsp;&nbsp; [2 - STORED FUNCTIONS](./DIA_03/PRE-AULA/2.STORED-FUNCTIONS.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  - Criar uma function que, receba um parâmetro de entrada e retorna o nome do filme vinculado ao registro de inventário com o parâmetro recebido;
  - Criar uma function que retorna a quantidade total de pagamentos feitos por um customer_id (informado por parâmetro);
  - Criar uma function que receba uma determinada categoria de filme e retorna a quantidade total de filmes registrados nessa categoria.

### &nbsp;&nbsp; [3 - TRIGGERS](./DIA_03/PRE-AULA/3.TRIGGER.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
  
  - Criar um TRIGGER que, a cada nova inserção feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido, a ação para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1;
  - Criar um TRIGGER que, a cada atualização feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO';
  - Criar um TRIGGER que, a cada exclusão feita na tabela carros, envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.


## [Parte 2](./DIA_03/POS-AULA) - Exercícios Pós Aula.

### &nbsp;&nbsp; [Exercicio 1](./DIA_03/POS-AULA/exercicio1.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica. Além disso, criar um outro trigger para INSERT que adiciona um novo registro na tabela movies_logs, informando o movie_id do filme que acaba de ser inserido na tabela movies, a executed_action como 'INSERT' e a log_date como a data atual.

### &nbsp;&nbsp; [Exercicio 2](./DIA_03/POS-AULA/exercicio2.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar um Trigger para UPDATE que, ao receber uma alteração na tabela movies, compara o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insirir na coluna ticket_price_estimation o valor de 'Increasing'. Caso contrário, insirir o valor 'Decreasing'. Adicionalmente, insirir um novo registro na tabela movies_logs, contendo informações sobre o registro alterado (movie_id, executed_action e log_date).

### &nbsp;&nbsp; [Exercicio 3](./DIA_03/POS-AULA/exercicio3.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  Criar um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs, onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.

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
