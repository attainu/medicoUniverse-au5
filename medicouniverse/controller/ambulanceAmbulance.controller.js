var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};
ambulanceController.ambulance = (req, res) => {

	res.render('ambulance');
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo');
};
ambulanceController.ambulancepost=(req,res)=>{
	var ambulanceInfo ={
		
	}
}
module.exports = ambulanceController;
