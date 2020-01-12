const express = require('express');
const router = express.Router();
const ambulanceController = require('../controller/ambulanceAmbulance.controller');

router.get('/', ambulanceController.ambulance);
router.get('/ambulanceInfo', ambulanceController.addAmbulance);
module.exports = router;
