window.onload = function () {
  if (localStorage.getItem('backColorSaved')) {
    textSection.style.backgroundColor = localStorage.getItem('backColorSaved');
  }
  if (localStorage.getItem('textColorSaved')) {
    textSection.style.color = localStorage.getItem('textColorSaved');
  }
  if (localStorage.getItem('fontSizeSaved')) {
    textSection.style.fontSize = localStorage.getItem('fontSizeSaved');
  }
  if (localStorage.getItem('fontFamilySaved')) {
    textSection.style.fontFamily = localStorage.getItem('fontFamilySaved');
  }
}

let textSection = document.querySelector('section');

function trocaCorFundo () {
  let coresFundo = document.querySelector('#backColor');
coresFundo.addEventListener('click',function (event) {
  textSection.style.backgroundColor = event.target.id;
  localStorage.setItem('backColorSaved', textSection.style.backgroundColor);
})
}

function trocaCorTexto () {
  let corTexto = document.querySelector('#textColor');
  corTexto.addEventListener('click', function(event) {
    textSection.style.color = event.target.id;
    localStorage.setItem('textColorSaved',event.target.id);
  })
}

function textFontSize () {
  let tamanhoFonte = document.querySelector('#fontSize');
  tamanhoFonte.addEventListener('click', function (event) {
    textSection.style.fontSize = event.target.id;
    localStorage.setItem('fontSizeSaved', event.target.id);
  })
}

function lineHeightSize () {
  let tamanhoEspacamento = document.querySelector('#lineHeight');
  tamanhoEspacamento.addEventListener ('click', function (event) {
    textSection.style.lineHeight = event.target.id;
  })
}

function fontFamily () {
  let fontFamilyType = document.querySelector('#fontFamily');
  fontFamilyType.addEventListener ('click', function (event) {
    textSection.style.fontFamily = event.target.id;
    localStorage.setItem ('fontFamilySaved', event.target.id);
  }) 
}

function resetLocalStorage () {
  resetButton = document.querySelector ('#reset');
  resetButton.addEventListener('click', function () {
    localStorage.clear();
    location.reload ();
  })
}

trocaCorFundo();
trocaCorTexto();
textFontSize();
lineHeightSize();
fontFamily();
resetLocalStorage();