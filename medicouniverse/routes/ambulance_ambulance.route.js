const express = require('express');
const router = express.Router();
const ambulanceController = require('../controller/ambulanceAmbulance.controller');

const redirectLogin = (req, res, next) => {
	if (!req.session.user) {
		res.redirect('/user/signin');
	} else {
		next();
		// console.log('Session information', req.session.user);
	}
};
const redirectHomepage = (req, res, next) => {
	if (req.session.user) {
		res.redirect('/pharmacy_home');
	} else {
		next();
	}
};

router.get('/ambulance_booking', ambulanceController.ambulance);
router.get('/ambulanceInfo', redirectLogin, ambulanceController.addAmbulance);
module.exports = router;
