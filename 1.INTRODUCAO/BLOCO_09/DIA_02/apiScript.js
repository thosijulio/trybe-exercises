// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const fetch = require('node-fetch');

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response1 => response1.json())
    .then(response => console.log(response));
};

const myPromise = new Promise((resolved, rejected) => {
  let arr = [];
  const divededNumbers = [2, 3, 5, 10];
  while (arr.length < 10) arr.push(Math.floor((Math.random() * 51)) ** 2);
  const arrMaked = arr.reduce((acc, curr) => acc + curr, 0);
  if ( arrMaked < 8000) {
    return resolved(divededNumbers.map((curr) => Math.floor(arrMaked / curr)));
  }
  rejected(`É mais de oito mil! Essa promise deve estar quebrada!`)
})
.then((value) => console.log(value.reduce((acc, curr) => acc + curr, value[0])))
.catch((message) => console.log(message));