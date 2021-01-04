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
exercicio4.style.fontWeight = '600';
exercicio3.appendChild(exercicio4);

let exercicio5 = document.createElement('div');
exercicio5.className = 'left-content';
exercicio2.appendChild(exercicio5);

let exercicio6 = document.createElement('div');
exercicio6.className = 'right-content';
exercicio2.appendChild(exercicio6);

let exercicio7 = document.createElement('img');
exercicio7.src = 'https://picsum.photos/200';
exercicio7.className = 'small-image';
exercicio5.appendChild(exercicio7);

let exercicio8 = document.createElement ('ul');
exercicio6.appendChild(exercicio8);
for (index = 0; index < 10; index += 1) {
    let liItens = document.createElement ('li');
    liItens.innerText = index+1;
    exercicio8.appendChild(liItens);
}