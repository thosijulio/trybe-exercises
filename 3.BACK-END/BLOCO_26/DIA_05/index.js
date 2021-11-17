const express = require('express');

const userRouter = require('./router/userRouter');

app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3000, () => console.log('running on port 3000'));