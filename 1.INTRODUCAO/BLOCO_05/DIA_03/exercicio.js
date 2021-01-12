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
            dayArray.className += ' holiday';
        }
        if (dayArray.innerText === '4' || dayArray.innerText === '11' || dayArray.innerText === '18' || dayArray.innerText === '25') {
            dayArray.className += ' friday';
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
    for (let key in teste) {
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