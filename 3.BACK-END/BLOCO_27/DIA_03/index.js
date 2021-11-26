const express = require('express');
const mainRouter = require('./controllers/mainRouter');

const app = express();
app.use(express.json());

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
