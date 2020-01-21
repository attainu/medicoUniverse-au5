const express = require('express');
const route = express.Router();
const hospitalcontroller = require('../controller/hospitalcontroller');

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

route.get('/hospitalsearch', hospitalcontroller.hospital);
route.get('/json', hospitalcontroller.db);
route.post('/storeddata', hospitalcontroller.storeddata);
route.post('/patientdata', hospitalcontroller.patientdata);
// route.get('/mongodbatlas',hospitalcontroller.atlas)
module.exports = route;
