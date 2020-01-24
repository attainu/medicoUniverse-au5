var ambulanceDb = require('../model/ambulance.ambulance.model');
var ambulanceController = {};

ambulanceController.ambulance = (req, res) => {
	var details = [
		{
			uniqueNumber: 0,
			driverName: 'Satendra Singh',
			driverNumber: 7011675429,
			ambulanceNumber: 'RJ 20 CA2019',
			gender: 'Male',
			age: 42
		},
		{
			uniqueNumber: 1,
			driverName: 'Vinit Kulkerni',
			driverNumber: 1478523690,
			ambulanceNumber: 'RJ 14 CA2019',
			gender: 'Male',
			age: 28
		},
		{
			uniqueNumber: 3,
			driverName: 'Nobita Chian',
			driverNumber: 1234569870,
			ambulanceNumber: 'RJ 21 AM1232',
			gender: 'Male',
			age: 20
		},
		{
			uniqueNumber: 4,
			driverName: 'Rehan Gupta',
			driverNumber: 7011675429,
			ambulanceNumber: 'GJ 01 ML7474',
			gender: 'Male',
			age: 29
		},
		{
			uniqueNumber: 5,
			driverName: 'Mohammad Aklakh',
			driverNumber: 8875838463,
			ambulanceNumber: 'RJ 20 CM2020',
			gender: 'Male',
			age: 56
		},
		{
			uniqueNumber: 6,
			driverName: 'Verma kumar',
			driverNumber: 7011675429,
			ambulanceNumber: 'RJ 20 DF1425',
			gender: 'Male',
			age: 36
		},
		{
			uniqueNumber: 7,
			driverName: 'Satendra gupta',
			driverNumber: 2589631478,
			ambulanceNumber: 'KL 20 ML7878',
			gender: 'Male',
			age: 26
		},
		{
			uniqueNumber: 8,
			driverName: 'Robert Jakma',
			driverNumber: 369852369,
			ambulanceNumber: 'JK 20 DF1221',
			gender: 'Male',
			age: 21
		},
		{
			uniqueNumber: 9,
			driverName: 'Kamal Preet Singh',
			driverNumber: 7878787878,
			ambulanceNumber: 'PB 20 DJ7849',
			gender: 'Male',
			age: 40
		}
	];
	var rand = Math.floor(Math.random() * 8);
	console.log(rand);
	res.render('ambulance', {
		ambulance: details[rand]
	});
};
ambulanceController.addAmbulance = (req, res) => {
	res.render('ambulanceInfo');
};
ambulanceController.ambulanceget = (req, res) => {
	var ambulanceInfo = {};
};
module.exports = ambulanceController;
