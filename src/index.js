require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('./middlewares/requireAuth');

const authRoutes = require('./routes/authRoutes');

const app = express();

const mongoUri =
  'mongodb+srv://manutdmohit:root@cluster0.bfqft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
  })
  .then(() => console.log('The connection is successful'))
  .catch((err) => console.error('There is no connection', err));

app.use(express.json());

app.use(authRoutes);

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(8000, () => {
  console.log('Listening on the port 8000');
});
