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

function limparCampos () {
  let inputs = document.querySelectorAll('input');
  let textArea = document.querySelectorAll('textarea');
  let selects = document.querySelectorAll('select');

  let botaoLimpa = document.querySelector('#clearForm');
  botaoLimpa.addEventListener('click', function () {
    for(index = 0; index < inputs.length; index += 1) {
      inputs[index].value = '';
    }
    for(index = 0; index < textArea.length; index += 1) {
        textArea[index].value = '';
    }
    for (index = 0; index < selects.length; index += 1) {
        selects[index].value = '';
    }
    let div = document.querySelector('.dadosPreenchidos');
    if (div !== null) {
      document.body.removeChild(div);
    }
  })
}

function criarEstados () {
    let selectEstados = document.querySelector('#state');
    let estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];
    for(index = 0; index < estados.length; index += 1) {
        let optionEstados = document.createElement ('option');
        optionEstados.id = estados[index];
        optionEstados.value = estados[index];
        optionEstados.name = 'state';
        optionEstados.innerText = estados[index];
        selectEstados.appendChild(optionEstados);
        selectEstados.value = '';
    }
}

function showForm () {
  let buttonForm = document.querySelector('#showForm');
    buttonForm.addEventListener('click', function (event) {
      event.preventDefault();
      let testeIf = document.querySelector('.dadosPreenchidos');
      if (testeIf === null) {
        let buttonForm = document.querySelector('#showForm');
        let inputs = document.querySelectorAll('input');
        let selects = document.querySelector('select');
        let labels = document.querySelectorAll('label');
        let criarDiv = document.createElement('div');
        criarDiv.className = 'dadosPreenchidos';
        document.body.appendChild(criarDiv);
        let divFeita = document.querySelector('.dadosPreenchidos');
    
      // let inputs = document.querySelector('input[name="typeHome"]:checked');
        for (index = 0; index <= 4; index += 1) {
          let nomeCampo = document.createElement('p');
          nomeCampo.innerText = inputs[index].name + ': ' + inputs[index].value;
          divFeita.appendChild(nomeCampo);
        }
        let nomeCampo = document.createElement('p');
        nomeCampo.innerText = selects.name + ': ' + selects.value;
        divFeita.appendChild(nomeCampo);

        let nomeCampo2 = document.createElement('p');
        let tipoResidencia = document.querySelector('input[name="Tipo"]:checked');
        nomeCampo2.innerText = 'Tipo de Residencia: ' + tipoResidencia.value;
        divFeita.appendChild(nomeCampo2);

      }
    })
  }


criarEstados ();
verificarData ();
limparCampos ();
showForm ();