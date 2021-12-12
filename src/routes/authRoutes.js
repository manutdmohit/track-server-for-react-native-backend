const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });

    await user.save();

    res.send('Post request successful');
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

module.exports = router;
