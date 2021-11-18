const express = require('express');
const axios = require('axios');
const cors = require('cors');

const userRouter = require('./router/userRouter');
const { tokenAuth } = require('./middlewares/authentication');

app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.get(
  '/btc/price',
  tokenAuth,
  async (req, res) => {
    const btc = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return res.status(200).send(btc.data);
  }
)

app.listen(3000, () => console.log('running on port 3000'));