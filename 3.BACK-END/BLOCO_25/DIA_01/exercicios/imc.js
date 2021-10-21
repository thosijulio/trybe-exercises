const calcImc = (peso, altura) => {
  console.log(`Peso: ${peso} - Altura: ${altura}`);
  const imc = peso * (altura / 2);
  console.log(`IMC: ${imc}`);
};

module.exports = { calcImc };
