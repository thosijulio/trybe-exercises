const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (_req, res) => {
  res.send("Requisito realizada")
});

app.put('/', (req, res) => {
  const { headers } = req;

  res.send(headers)
});

app.post('/', (req, res) => {
  const { body } = req;

  res.status(201).json(body)
});

app.listen(3000, () => console.log('listen'));
