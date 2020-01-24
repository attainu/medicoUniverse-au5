const express = require('express');
const bookingController = require('../controller/bookingDoctors.controller');
const router = express.Router();

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
		res.redirect('/');
	} else {
		next();
	}
};

router.get('/bookingDoctors', bookingController.open);
// router.get('/showResults', bookingController.insert)
router.get('/displayResults', bookingController.find);
router.post('/appointment', redirectLogin, bookingController.getInput);
router.post('/bookNow' , bookingController.bookNow)

module.exports = router;
