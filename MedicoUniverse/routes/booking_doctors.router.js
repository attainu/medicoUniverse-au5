const express = require('express')
const bookingController = require('../controller/bookingDoctors.controller')
const router = express.Router();


router.get('/', bookingController.open)
// router.get('/showResults', bookingController.insert)
router.get('/displayResults', bookingController.find)
router.post('/appointment', bookingController.getInput )

module.exports = router;