const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const doctorSchema = new Schema({
    "_id": ObjectId,
    "name": String,
    "address": String,
    "fees": Number,
    "phone":Number,
    "experience": Number,
    "specialization": String,
    "gender" : String,
    "image": String
});

const model = mongoose.model('doctors', doctorSchema);
module.exports = model;