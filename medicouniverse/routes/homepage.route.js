const express = require('express');
const homepageController = require('../controller/homepage.controller');
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
		res.redirect('/pharmacy_home');
	} else {
		next();
	}
};

router.get('/', homepageController.getHomepage);
router.get('/medicoUniverse/about', homepageController.getAboutUs);
router.get('/medicoUniverse/mission', homepageController.getMission);

module.exports = router;
