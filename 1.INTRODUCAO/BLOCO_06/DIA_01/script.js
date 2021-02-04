function verificarData () {
  let dataInput = document.querySelector('#initialDay');
  let submitButton = document.querySelector('#submit');
  dataInput.addEventListener('change', function () {
    if (dataInput.value.length === 8) {
      if ((dataInput.value[0] + dataInput.value[1]) > 0 && (dataInput.value[0] + dataInput.value[1]) <= 31) {
        if ((dataInput.value[2] + dataInput.value[3]) > 0 && (dataInput.value[2] + dataInput.value[3]) <= 12) {
          if ((dataInput.value[4] + dataInput.value[5] + dataInput.value[6] + dataInput.value[7]) > 0) {
              let dataFormated = dataInput.value.substr(0,2) + '/' + dataInput.value.substr(2,2) + '/' + dataInput.value.substr(4,4);
              dataInput.value = dataFormated;
          }
          else {
            alert('Ano inválido');
            dataInput.value = '';
          }
        }
        else {
          alert('Mês inválido');
          dataInput.value = '';
        }
      }
      else {
        alert('Dia inválido');
        dataInput.value = '';
      }
    }
    else {
        alert('Data inválida');
        dataInput.value = '';
    }
  })
}

function botaoExerc3 () {

}

botaoExerc3 ();
verificarData ();