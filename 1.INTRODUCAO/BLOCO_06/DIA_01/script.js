function createStates() {
  let estados = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}

let tagSelect = document.getElementById('state');
let estadosLenght = Object.keys(estados).length;
for(let key in estados) {
  let selectEstados = document.createElement('option');
  selectEstados.value = key;
  selectEstados.innerText = key + ' - ' + estados[key];
  tagSelect.appendChild(selectEstados);
}
}

function ajustarData() {
  let campoData = document.getElementById('dataInicio');
  campoData.addEventListener('input', function(event) {
    if(campoData.value.length == 2) {
      if(campoData.value[1] !== '/') {
        campoData.value += '/';
      }
    }
    if(campoData.value.length == 5) {
      if(campoData.value[4] !== '/') {
        campoData.value += '/';
      }
    }
  })
}

function verifyDate() {
    let dataInserida = document.getElementById('dataInicio');
    dataInserida.addEventListener('change', function() {
      let verificaDia = parseInt((dataInserida.value[0] + dataInserida.value[1]));
      let verificaMes = parseInt((dataInserida.value[3] + dataInserida.value[4]));
      let verificaAno = parseInt((dataInserida.value[6] + dataInserida.value[7] + dataInserida.value[8] + dataInserida.value[9]));

      if (verificaDia) {
        if(verificaDia > 31 || verificaDia <= 0) {
          alert("Dia inválido!");
          dataInserida.value = '';
        }
      }
      else {
        alert("Dia inválido!");
        dataInserida.value = '';
      }
      if (verificaMes) {
        if(verificaMes <= 0 || (verificaMes > 12)) {
          alert("Mês inválido!");
          dataInserida.value = '';
        }
      }
      else {
        alert('Mês inválido!');
        dataInserida.value = '';
      }
      if (verificaAno) {
        if(verificaAno.value <= 0) {
          alert('Ano inválido');
          dataInserida.value = '';
        }
      }
      else {
        alert('Ano inválido');
        dataInserida.value = '';
      }
    })
}

verifyDate();
createStates();
ajustarData();