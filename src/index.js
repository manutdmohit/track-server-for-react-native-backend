require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('./middlewares/requireAuth');

const authRoutes = require('./routes/authRoutes');

const trackRoutes = require('./routes/trackRoutes');

const PORT = process.env.PORT || 8000;

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
app.use(trackRoutes);

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(PORT, () => {
  console.log('Listening on the port 8000');
});
