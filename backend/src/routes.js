const { Router } = require('express');

const PalindromoController = require('./app/controllers/PalindromoController.js');
const PurchaseController = require('./app/controllers/PurchaseController.js');
const MotocycleController = require('./app/controllers/MotocycleController.js');
const CarController = require('./app/controllers/CarController.js');
const CepController = require('./app/controllers/CepController.js');


const router = Router();

router.get('/palindromo', PalindromoController.show);
router.get('/purchase', PurchaseController.show);
router.post('/motocycle', MotocycleController.store);
router.get('/motocycle', MotocycleController.show);
router.post('/car', CarController.store);
router.get('/car', CarController.show);
router.post('/ceps', CepController.show);

module.exports = router;
