function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
function exercicio1 () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let key in dezDaysList) {
        let dayArray = document.createElement('li');
        const daysUl = document.querySelector('#days');
        dayArray.innerText = dezDaysList[key];
        dayArray.className = 'day';
        if (dayArray.innerText === '24' || dayArray.innerText === '25' || dayArray.innerText === '31') {
            dayArray.classList.add ('holiday');
        }
        if (dayArray.innerText === '4' || dayArray.innerText === '11' || dayArray.innerText === '18' || dayArray.innerText === '25') {
            dayArray.classList.add ('friday');
        }
        daysUl.appendChild(dayArray);

    }
}

exercicio1();

function exercicio2 (feriados) {
    if (feriados === 'Feriados') {
        const botaoExerc2 = document.createElement ('button');
        const containerBotoes = document.querySelector('.buttons-container');
        botaoExerc2.id = 'btn-holiday';
        botaoExerc2.innerText = 'Feriados';
        containerBotoes.appendChild(botaoExerc2);
    }
}
exercicio2('Feriados');

function exercicio3 () {
    
    let teste = document.querySelectorAll('.holiday');
    for (key = 0; key < teste.length; key += 1) {
        if(teste[key].style.backgroundColor === 'green') {
            teste[key].style.backgroundColor = 'rgb(238,238,238)';
        }
        else {
            teste[key].style.backgroundColor = 'green';
        }
    }
    
}

function botaoFeriado() {
    const botaoExerc2 = document.querySelector('#btn-holiday')
    botaoExerc2.addEventListener ('click',exercicio3);
}

botaoFeriado();

function exercicio4(sextou) {
    if(sextou === 'Sexta-feira') {
        const containerBotoes = document.querySelector('.buttons-container');
        let botaoSexta = document.createElement('button');
        botaoSexta.id = 'btn-friday';
        botaoSexta.innerText = 'Sexta-feira'
        containerBotoes.appendChild(botaoSexta);
    }
}

exercicio4('Sexta-feira');

function exercicio5 () {
    let diasSexta = document.getElementsByClassName('friday');
    for (key = 0; key < diasSexta.length; key += 1) {
        let diaAnterior = diasSexta[key].previousElementSibling.innerText;
        let numeroDiaAnterior = 0;
        numeroDiaAnterior = parseInt(diaAnterior, 10);

        if (diasSexta[key].innerText !== 'Sextou') {
            diasSexta[key].innerText = 'Sextou';
        }
        else {
            diasSexta[key].innerText = numeroDiaAnterior + 1;
        }
    }
}
function botaoSextou () {
    botaoExerc4 = document.querySelector('#btn-friday');
    botaoExerc4.addEventListener ('click', exercicio5);
}

botaoSextou();

let dias = document.getElementsByClassName('day');

function zoom (daysSend) {
    if (daysSend.target.style.fontSize = '15px') {
        daysSend.target.style.fontSize = '30px';
    }
    else {
        daysSend.target.style.fontSize = '20px';
    }
}

function exercicio6 () {
    const daysUl = document.querySelector('#days');
    let colorDaySelected = document.getElementsByClassName ('selected');

    daysUl.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '35px';
    })
    daysUl.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
    })
    daysUl.addEventListener('click', function(event) {
        event.target.classList.toggle('colorTask');
    })
}

exercicio6();

let botaoOk = document.querySelector('#btn-add');
botaoOk.addEventListener ('click', exercicio7);

function exercicio7 () {
    let caixaTarefa = document.getElementById('task-input');
    let tarefa = caixaTarefa.value;
    let criarTarefa = document.createElement ('span');
    criarTarefa.innerText = caixaTarefa.value
    let pai = document.getElementsByClassName('my-tasks');
    pai[0].appendChild(criarTarefa);

    function color (cor) {
        let exercicio8 = document.createElement('div');
        exercicio8.className = 'task';
        exercicio8.style.backgroundColor = cor;
        function addClass () {
            exercicio8.classList.toggle ('selected');
        }
        exercicio8.addEventListener('click', addClass);
        pai[0].appendChild(exercicio8);
    }
    color ('magenta');
}

function exercicio10 () {
    let taskSelected = document.getElementsByClassName('task selected');
    let dias = document.querySelector('#days');
    let task = document.querySelector ('.task');

    dias.addEventListener('click', function (event) {
        let colorEventTarget = event.target.style.color;
        if (taskSelected.length > 0 && colorEventTarget !== taskSelected[0].style.backgroundColor) {
            event.target.style.color = taskSelected[0].style.backgroundColor;
        }
        else if (event.target.style.color === taskSelected[0].style.backgroundColor) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    })

}
exercicio10();