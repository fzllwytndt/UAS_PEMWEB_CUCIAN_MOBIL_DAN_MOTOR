const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Definisikan rute
router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.createCustomer);

module.exports = router;