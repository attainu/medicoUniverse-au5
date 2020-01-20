var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};
ambulanceController.ambulance = (req, res) => {
	res.render('ambulance');
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo', { layout: 'ambulanceLayout.hbs' });
};
module.exports = ambulanceController;
