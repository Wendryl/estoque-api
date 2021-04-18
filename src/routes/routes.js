const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
const auth = require('../controllers/auth');
const product = require('../controllers/product');
const company = require('../controllers/company');
const category  = require('../controllers/category');

router.post('/auth', user.authenticate);

// Companies
router.get('/companies', auth.verifyToken, company.list);
router.get('/companies/:id', auth.verifyToken, company.find);
router.post('/companies', auth.verifyToken, company.store);
router.put('/companies/:id', auth.verifyToken, company.alter);
router.delete('/companies/:id', auth.verifyToken, company.destroy);

// Products
router.get('/products', auth.verifyToken, product.list);
router.get('/products/:id', auth.verifyToken, product.find);
router.post('/products', auth.verifyToken, product.store);
router.put('/products/:id', auth.verifyToken, product.alter);
router.delete('/products/:id', auth.verifyToken, product.destroy);

// Categories
router.get('/categories', auth.verifyToken, category.list);
router.get('/categories/:id', auth.verifyToken, category.find);
router.post('/categories', auth.verifyToken, category.store);
router.put('/categories/:id', auth.verifyToken, category.alter);
router.delete('/categories/:id', auth.verifyToken, category.destroy);


module.exports = router 