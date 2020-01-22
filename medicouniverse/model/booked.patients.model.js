const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const patientsSchema = new Schema({
    
    "patientsName": String,
    "patientsMobile": Number,
    "preferredTime": String,
    "patientsAddress":String,
    
});

const patients = mongoose.model('patients', patientsSchema);
module.exports = patients;