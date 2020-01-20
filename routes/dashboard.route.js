const express = require("express");
const router = express.Router();
const dashboardController = require('../controller/dashboard.controller');

router.get('/profile', dashboardController.getDashProfile);
router.get('/appointments', dashboardController.getDashAppointments);
router.get('/orders', dashboardController.getDashOrders);
router.post('/saveprofile', dashboardController.postProfile);
router.get('/getuserdetails', dashboardController.getUser);
router.post('/savephone', dashboardController.postPhone);
module.exports = router;