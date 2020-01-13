var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};
ambulanceController.ambulance = (req, res) => {
	var random = Math.floor(Math.random() * 3);
	ambulanceDb.findOne({ uniqueID: random }, function(err, docs) {
		console.log(random);
		console.log(docs);
		res.render('ambulance', {
			db: docs
		});
	});
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo', { layout: 'ambulanceLayout.hbs' });
};
module.exports = ambulanceController;
