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
  
function numberDays () {
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

numberDays();