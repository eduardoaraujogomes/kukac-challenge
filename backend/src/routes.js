const { Router } = require('express');

const PalindromeController = require('./app/controllers/PalindromeController.js');
const PurchaseController = require('./app/controllers/PurchaseController.js');
const MotocycleController = require('./app/controllers/MotocycleController.js');
const CarController = require('./app/controllers/CarController.js');


const router = Router();

router.post('/palindrome', PalindromeController.show);
router.post('/purchase', PurchaseController.show);
router.post('/motocycle', MotocycleController.store);
router.get('/motocycle', MotocycleController.show);
router.post('/car', CarController.store);
router.get('/car', CarController.show);

module.exports = router;
