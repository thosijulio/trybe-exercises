const express = require('express');
const cors = require('cors');

const mainRouter = require('./controller/');
const error = require('./controller/middleware/error');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/', mainRouter);

app.use(error);

app.listen(PORT, () => console.log(`Listen on port ${ PORT }`));
