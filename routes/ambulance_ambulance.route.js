const express = require('express');
const router = express.Router();
const ambulanceController = require('../controller/ambulanceAmbulance.controller');

router.get('/ambulance_booking', ambulanceController.ambulance);
// router.get('/ambulanceInfo',  ambulanceController.addAmbulance);
// router.get('/ambula')
// router.post('/ambulanceInfo',ambulanceController.ambulancepost)
module.exports = router;
