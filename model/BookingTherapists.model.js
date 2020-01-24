const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const therapistSchema = new Schema({

    "_id": ObjectId,
    "name": String,
    "address": String,
    "fees": Number,
    "experience": Number,
    "phone":Number,
    "specialization": String,
    "gender" : String,
    "image": String

});

const modelTherapist = mongoose.model('therapists', therapistSchema);
module.exports = modelTherapist;