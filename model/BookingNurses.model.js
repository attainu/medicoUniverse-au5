const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId
const nursesSchema = new Schema({

    "_id": ObjectId,
    "name": String,
    "address": String,
    "fees": Number,
    "experience": Number,
    "phone":Number,
    "specialization":String,
    "image": String

});

const modelNurses = mongoose.model('nurses', nursesSchema);
module.exports = modelNurses;