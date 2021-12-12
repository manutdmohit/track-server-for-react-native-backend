const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = new User({ email, password });

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      'THISISASECRETKEYTOPTOPSECRETKEY'
    );
    res.send({ token });
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

module.exports = router;
