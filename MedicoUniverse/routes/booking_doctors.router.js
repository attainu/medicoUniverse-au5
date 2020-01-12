const express = require('express')
const bookingController = require('../controller/bookingDoctors.controller')
const router = express.Router();


router.get('/', bookingController.open)
router.get('/showResults', bookingController.insert)
router.get('/displayResults', bookingController.find)
router.get('/booking_front', bookingController.show)
router.post('/getData', bookingController.getInput )

module.exports = router;