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

function showContent() {
  let buttonSubmit = document.getElementById('botao-enviar');
  buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('1').innerText = 'Nome: ' + document.getElementById('name').value;
    document.getElementById('2').innerText = 'Email: ' + document.getElementById('email').value;
    document.getElementById('3').innerText = 'CPF: ' + document.getElementById('CPF').value;
    document.getElementById('4').innerText = 'Endereço: ' + document.getElementById('address').value;
    document.getElementById('5').innerText = 'Cidade: ' + document.getElementById('city').value;
    document.getElementById('6').innerText = 'Estado: ' + document.getElementById('state').value;
    document.getElementById('7').innerText = 'Tipo: ' + document.querySelector('input[name="residence-type"]:checked').value;
    document.getElementById('8').innerText = 'Resumo do curriculo: ' + document.getElementById('resumoCV').value;
    document.getElementById('9').innerText = 'Cargo: ' + document.getElementById('cargo').value;
    document.getElementById('10').innerText = 'Descrição do cargo: ' + document.getElementById('descricaoCargo').value;
    document.getElementById('11').innerText = 'Data de início: ' + document.getElementById('dataInicio').value;
  })
}

verifyDate();
createStates();
ajustarData();
showContent();