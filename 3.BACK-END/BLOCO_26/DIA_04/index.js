const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3001, () => console.log('rodando'));

app.use(express.json());

app.get('/ping', (_req, res) => res.status(200).send({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${ name }!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ message: `Hello, ${ name }!` });
  return res.status(401).send({ message: 'Unauthorized'});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).send({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade.` });
});
