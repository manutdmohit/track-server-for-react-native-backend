const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoUri =
  'mongodb+srv://manutdmohit:root@cluster0.bfqft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => console.log('The connection is successful'))
  .catch((err) => console.error('There is no connection', err));

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8000, () => {
  console.log('Listening on the port 8000');
});
