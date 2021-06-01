const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const auth = require('../controllers/auth');
const product = require('../controllers/product');
const company = require('../controllers/company');
const category  = require('../controllers/category');
const purchase = require('../controllers/purchase');
const sale = require('../controllers/sale');

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

// Users
router.get('/users', auth.verifyToken, user.list);
router.get('/users/:id', auth.verifyToken, user.find);
router.post('/users', auth.verifyToken, user.store);
router.put('/users/:id', auth.verifyToken, user.alter);
router.delete('/users/:id', auth.verifyToken, user.destroy);

// Customers
router.get('/customers', auth.verifyToken, user.list);
router.get('/customers/:id', auth.verifyToken, user.find);
router.post('/customers', auth.verifyToken, user.store);
router.put('/customers/:id', auth.verifyToken, user.alter);
router.delete('/customers/:id', auth.verifyToken, user.destroy);

// // Purchases
// router.get('/purchases', auth.verifyToken, purchase.list);
// router.get('/purchases/:id', auth.verifyToken, purchase.find);
// router.post('/purchases', auth.verifyToken, purchase.list);

// Sales
router.get('/sales', auth.verifyToken, sale.list);
router.get('/sales/:id', auth.verifyToken, sale.find);
router.post('/sales', auth.verifyToken, sale.store);

module.exports = router 