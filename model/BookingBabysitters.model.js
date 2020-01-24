const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const babysittersSchema = new Schema({

    "name": String,
    "address": String,
    "fees": Number,
    "experience": Number,
    "specialization":String,
    "phone":Number,
    "image": String

});

const modelBabysitters = mongoose.model('babysitters', babysittersSchema);
module.exports = modelBabysitters; 