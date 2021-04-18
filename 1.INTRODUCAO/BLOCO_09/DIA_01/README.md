# Dia 9.1: JavaScript Assíncrono e Callbacks

### &nbsp;&nbsp; [Exercicio 1](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio1.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Dado o código abaixo, responder qual a ordem de execução das linhas comentadas.
 
 ~~~javascript
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
~~~

### &nbsp;&nbsp; [Exercicio 2](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio2.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br> 
Dado o código abaixo, responder qual a ordem de execução das linhas comentadas.

 ~~~javascript
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
~~~

### &nbsp;&nbsp; [Exercicio 3](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio3.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modificar getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.
 
~~~javascript
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
~~~

### &nbsp;&nbsp; [Exercicio 4](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio4.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Criar a função sendMarsTemperature , que imprime a temperatura em Marte.

~~~javascript
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
~~~

### &nbsp;&nbsp; [Exercicio 5](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio5.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Feita a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.
 
~~~javascript
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...


sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
~~~

### &nbsp;&nbsp; [Exercicio 6](https://github.com/thosijulio/trybe-exercises/blob/main/1.INTRODUCAO/BLOCO_09/DIA_01/exercicio6.js)
  <b>&nbsp;&nbsp;&nbsp;Conteúdo Solicitado: </b> <br>
Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicionar na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.
  
~~~javascript
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
~~~

---

<h1 align="center">
    <img alt="Trybe" src="https://github.com/thosijulio/trybe-projects/blob/main/trybe-logo.png"/>
</h1>
<h3 align=center>Me encontre:</h3>
<p align=center>
<a href="https://www.linkedin.com/in/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.github.com/thosijulio/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="thosijulio" height="20" width="20" /></a>
<a href="https://www.instagram.com/thosijulio" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="thosijulio" height="20" width="20" /></a>
</p>
