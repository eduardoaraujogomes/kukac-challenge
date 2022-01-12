const { Router } = require('express');

const PalindromeController = require('./app/controllers/PalindromeController.js');
const PurchaseController = require('./app/controllers/PurchaseController.js');
const MotocycleController = require('./app/controllers/MotocycleController.js');


const router = Router();

router.post('/palindrome', PalindromeController.show);
router.post('/purchase', PurchaseController.show);
router.post('/motocycle', MotocycleController.store);
router.get('/motocycle', MotocycleController.show);

module.exports = router;
