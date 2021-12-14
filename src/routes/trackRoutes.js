const express = require('express');
const requireAuth = require('../middlewares/requireAuth');
const Track = require('../models/Track');

const router = express.Router();
router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

module.exports = router;
