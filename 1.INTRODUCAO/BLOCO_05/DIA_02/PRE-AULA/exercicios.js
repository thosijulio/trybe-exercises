
function exercPreAulaPT1 () {
    /*
    1. Acesse o elemento elementoOndeVoceEsta.
    2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
    4. Acesse o primeiroFilho a partir de pai.
    5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    8. Agora acesse o terceiroFilho a partir de pai.
    */
    
    let exerc1 = document.getElementById('elementoOndeVoceEsta');
    
    let exerc2 = document.getElementById('elementoOndeVoceEsta').parentNode;
    exerc2.style.color = 'red';
    
    let exerc3 = document.getElementById('elementoOndeVoceEsta').firstChild.nextSibling;
    exerc3.innerText = 'teste';
    
    let exerc4 = document.getElementById('pai').childNodes[1];
    
    let exerc5 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
    
    let exerc6 = document.querySelector('#elementoOndeVoceEsta').nextSibling;
    
    let exerc7 = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
    
    let exerc8 = document.querySelector('#pai').childNodes[5];
    }
    
function exercPreAulaPT2 () {
/*
1. Crie um irmão para elementoOndeVoceEsta .
2. Crie um filho para elementoOndeVoceEsta .
3. Crie um filho para primeiroFilhoDoFilho .
4. A partir desse filho criado, acesse terceiroFilho .
*/

let exerc1 = document.createElement('div');
exerc1.id = 'exerc1';
paiExerc1 = document.querySelector('#pai');

paiExerc1.appendChild(exerc1);

let exerc2 = document.createElement('div');
exerc2.id = 'exerc2';
let paiExerc2 = document.querySelector('#elementoOndeVoceEsta');
paiExerc2.appendChild(exerc2);

let exerc3 = document.createElement('div');
exerc3.id = 'exerc3';
paiExerc3 = document.querySelector('#primeiroFilhoDoFilho');
paiExerc3.appendChild(exerc3);

let exerc4 = document.querySelector('#exerc3').parentNode.parentNode.nextElementSibling;
}

function exercPreAulaPT3 () {
/*
1. Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
*/
    let pai = document.getElementById('pai');
    let ondeEsta = document.getElementById('elementoOndeVoceEsta');
    pai.removeChild(pai.childNodes[1]);
    pai.removeChild(pai.childNodes[4]);
    pai.removeChild(pai.childNodes[5]);
    pai.removeChild(pai.childNodes[3]);
    ondeEsta.removeChild(ondeEsta.childNodes[3]);
}