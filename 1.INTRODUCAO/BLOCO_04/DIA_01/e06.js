let peca = 'CaValO';
peca = peca.toLowerCase();


switch (peca) {
  case 'rei':
    console.log ('O rei pode se movimentar para todas as posições, porém apenas uma casa por vez.');
    break;

  case 'dama':
    console.log ('A dama pode se movimentar em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.');
    break;

  case 'torre':
    console.log ('A torre pode se movimentar na vertical e na horizontal, quantas casas quiser.');
    break;

  case 'bisco':
    console.log ('O bisco move-se na diagonal, quantas casas quiser.');
    break;

  case 'cavalo':
    console.log ('O cavalo é a única peça que pode saltar sobre as outras do tabuleiro, sejam elas amigas ou inimigas. Ele pode andar duas casa na horizontal e uma na vertical, ou duas casas na vertical e uma na horizontal.');
    break;

  case 'peao':
    console.log ('O peão move-se sempre uma casa para frente, exceto no primeiro movimento dele, quando tem a opção de se mover-se duas casas. É a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para andar no tabuleiro. O peão pode capturar peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');
    break;

  default :
    console.log ('Erro: Opção inválida');
}
