var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};

ambulanceController.ambulance = (req, res) => {
	var details = {
		uniqueNumber: 0,
		driverName: 'Satendra Singh',
		driverNumber: 7011675429,
		ambulanceNumber: 'RJ 20 CA2019',
		gender: 'Male',
		age: 42
	};

	res.render('ambulance', {
		ambulance: details
	});
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo');
};
ambulanceController.ambulanceget = (req, res) => {
	var ambulanceInfo = {};
};
module.exports = ambulanceController;
