const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const patientsSchema = new Schema({
    
    "patientsName":  { type: String, required: true },
    "patientsMobile":  { type: Number, required: true },
    "preferredTime": { type: String, required: true },
    "patientsAddress": { type: String, required: true },
    "person" :  { type: String, required: true },
    "bookingDate":{type: Date,Default: Date.now}
    
});

const patients = mongoose.model('patients', patientsSchema,'patients');
module.exports = patients;