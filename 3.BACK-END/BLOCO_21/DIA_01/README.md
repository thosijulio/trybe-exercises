# Dia 21.1: Funções mais usadas no SQL

## &nbsp; Descrição dos Exercícios

## [Parte 1](./DIA_01/PRE-AULA/) - Exercícios Pré Aula.
OBS.: Para a realização dos exercícios pré-aula, foi utilizado o banco de dados [Sakila](https://dev.mysql.com/doc/sakila/en/).

### &nbsp;&nbsp; [1 - Manipulação de Strings](./DIA_01/PRE-AULA/1-MANIPULACAO-STRINGS.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

  - Criar uma query que exiba a palavra 'trybe' em CAIXA ALTA;
  - Criar uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?';
  - Criar uma query que exiba quantos caracteres existe na string: 'Uma frase qualquer';
  - Criar uma query que extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas';
  - Criar uma query que exiba a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' em caixa baixa;

### &nbsp;&nbsp; [2 - Condicionais (IF e CASE)](./DIA_01/PRE-AULA/2-CONDICIONAIS.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 

Na tabela sakila.film:
  - Criar uma query que exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', que deve ser feita uma avaliação se o nome do filme é 'ACE GOLDFINGER'. Se for, exiba "Já assisti a esse filme". Se não, exiba "Não conheço o filme";
  - Criar uma query que exiba o título, a classificação indicativa e uma coluna extra 'público alvo', que classifica o filme de acordo com as siglas:
    - G: "Livre para todos";
    - PG: "Não recomendado para menores de 10 anos";
    - PG-13: "Não recomendado para menores de 13 anos";
    - R: "Não recomendado para menores de 17 anos";
    - Se não for nenhuma das classificações anteriores: "Proibido para menores de idade".

### &nbsp;&nbsp; [3 - Funções Matemáticas](./DIA_01/PRE-AULA/3-FUNCOES-MATEMATICAS.sql)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  
  - Criar uma query que gere um valor entre 15 e 20;
  - Criar uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais;
  - Criar uma query que exiba o valor aproximado para baixo de 39.494;
  - Criar uma query que exiba o valor aproximado para cima de 85.234.

### &nbsp;&nbsp; [4 - Datas](./DIA_01/PRE-AULA/4-DATAS.sql)

  - Criar uma query que exiba a diferença de dias entre '2030-01-20' e hoje;
  - Criar uma query que exiba a diferença de horas entre '10:25:45' e '11:00:00'.

### &nbsp;&nbsp; [5 - Funções de Agregação](./DIA_01/PRE-AULA/5-FUNCOES-AGREGACAO.sql)

- Criar uma query que exiba a média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
- Criar uma query que exiba a duração mínima dos filmes como 'Duração Mínima';
- Criar uma query que exiba a duração máxima dos filmes como 'Duração Máxima';
- Criar uma query que exiba a soma de todas as durações como 'Tempo de Exibição Total';
- Criar uma query que exiba a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

### &nbsp;&nbsp; [6 - GROUP BY e HAVING](./DIA_01/PRE-AULA/6-GROUPBY-HAVING.sql)

- Criar uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos;
- Criar uma query que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status;
- Criar uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor;
- Criar uma query que exiba o nome do distrito e a quantidade de endereços registrados nele. Ordenar da maior quantidade para a menor;
- Criar uma query que exiba apenas as durações médias que estão entre 115.0 a 121.50. Dar um alias (apelido) à coluna gerada por AVG(length). Ordenar os resultados de forma decrescente;
- Criar uma query que exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dar um alias para SUM(replacement_cost), Ordenar os resultados de forma crescente.

## [Parte 2](https://github.com/thosijulio/trybe-exercises/3.BACK-END/BLOCO_21/DIA_01/POS-AULA/Exercicios.sql) - Exercícios Pós Aula.
OBS.: Para a realização dos exercícios pré-aula, foi utilizada a tabela 'employees' do banco de dados 'hr'.

### &nbsp;&nbsp; Exercicios
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
  
  - Criar uma query para exibir o maior salário da tabela;
  - Criar uma query para exibir a diferença entre o maior e o menor salário;
  - Criar uma query para exibir média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente;
  - Criar uma query para exibir a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias;
  - Criar uma query para exibir o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Formatar as coluna para que seu retorno tenha apenas duas casas decimais.
  - Criar uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800;
  - Criar uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A;
  - Criar uma query para exibir o nome de todos os projetos cujo código contenha a letra H;
  - Criar uma query para exibir a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID);
  - Criar uma query para exibir somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG);
  - Criar uma query para exibir em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG);
  - Criar uma query para exibir a média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários;
  - Criar uma query para atualizar a coluna PHONE_NUMBER, para que todos os telefones iniciados por 515 devem iniciar com 777;
  - Criar uma query para exibir as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres;
  - Criar uma query para exibir o id, primeiro nome e ano no qual foi contratado (exiba somente o ano);
  - Criar uma query para exibir o id, primeiro nome e dia do mês no qual foi contratado (somente o dia);
  - Criar uma query para exibir o id, primeiro nome e mês no qual foi contratado (somente o mês);
  - Criar uma query para exibir os nomes dos funcionários em letra maiúscula;
  - Criar uma query para exibir o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987;
  - Criar uma query para exibir o nome, sobrenome e o tempo que trabalha na empresa (em dias).

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
