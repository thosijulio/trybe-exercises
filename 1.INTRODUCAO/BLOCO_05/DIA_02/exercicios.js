let exercicio1 = document.createElement('h1');
exercicio1.innerText = 'Exercício 5.2 - JavaScript DOM';
exercicio1.style.textAlign = 'center';
exercicio1.style.backgroundColor = 'Green';
exercicio1.style.margin = '0';
document.body.style.margin = '0';

document.body.appendChild(exercicio1);

let exercicio2 = document.createElement('div');
exercicio2.className = 'main-content';
document.body.appendChild(exercicio2);

let exercicio3 = document.createElement('div');
exercicio3.className = 'center-content';
exercicio2.appendChild(exercicio3);

let exercicio4 = document.createElement('p');
exercicio4.innerText = 'Resolução exercício 4';
exercicio4.style.textAlign = 'center';
exercicio3.appendChild(exercicio4);
