const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
const auth = require('../controllers/auth');

router.post('/auth', user.authenticate);

router.get('/test', auth.verifyToken, (req, res) => {
  res.send('ok');
})


module.exports = router 