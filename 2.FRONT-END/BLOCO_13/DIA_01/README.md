# Dia 13.1: Ciclo de Vida de Componentes

## &nbsp; Descrição dos Exercícios - Parte 1
Criação de uma aplicação que consuma a API de fotos aleatórias de cachorros (dog.ceo).

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Exibir na página uma foto de um cachorro através da API dog.ceo.
 - Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
 - Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
 - Deve existir um botão que, para cada clique, busque mais um cachorro.
 
### &nbsp;&nbsp; Exercicio 2
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Implementar mais algumas funcionalidades com base no código do exercício anterior.
 - A cada tentativa de atualização do componente, verificar se o campo `message` tem a palavra terrier. Se sim, não atualize o componente.
 - Guardar a url da última imagem gerada no localStorage após cada atualização.
 - Após a atualização do componente, exibir um alert com a raça do cachorro (verifique o campo message);

## &nbsp; Exercícios Bônus

### &nbsp;&nbsp; Exercicio 1
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Implementar, a partir do código dos exercícios da parte 1, os seguintes requisitos:

 - A cada foto que for baixada, através de um input, permitir que quem usa dê um nome ao cachorro;
 - Criar um botão que guarde o resultado, juntamente com o nome dado ao dog, em um array;
 - Guardar o array no localStorage a cada atualização, e não mais a url da última imagem gerada;
 - A cada inicialização da aplicação, verificar se existem dados prévios guardados no localStorage. Caso haja, ignorar a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exiba a última imagem guardada.

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
