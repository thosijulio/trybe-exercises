const express = require('express');
const mainRouter = require('./controller/mainRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', mainRouter);

app.listen(PORT, () => console.log(`listen on port ${ PORT }`));
