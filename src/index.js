const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8000, () => {
  console.log('Listening on the port 8000');
});
