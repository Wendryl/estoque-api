const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
const auth = require('../controllers/auth');
const product = require('../controllers/product');
const company = require('../controllers/company');

router.post('/auth', user.authenticate);

router.get('/companies', auth.verifyToken, company.list);
router.get('/companies/:id', auth.verifyToken, company.find);
router.post('/companies', auth.verifyToken, company.store);
router.put('/companies/:id', auth.verifyToken, company.alter);
router.delete('/companies/:id', auth.verifyToken, company.destroy);


module.exports = router 