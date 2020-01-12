var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};
ambulanceController.ambulance = (req, res) => {
	// ambulanceDb.find({}, function(err, docs) {
	// 	console.log(docs);
	// 	res.render('ambulance', { layout: 'ambulanceLayout.hbs' });
	// });

	ambulanceDb
		.create({
			ambulanceNumber: 'sew',
			driverName: 'avinash',
			driverNumber: '88888'
		})
		.then(function(result) {
			res.send(result);
		});
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo', { layout: 'ambulanceLayout.hbs' });
};
module.exports = ambulanceController;
