const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ambulanceSchema = new Schema({
	ambulanceNumber: String,
	driverName: String,
	driverNumber: Number
});

const ambulanceDb = mongoose.model('ambulanceDb', ambulanceSchema);
module.exports = ambulanceDb;
