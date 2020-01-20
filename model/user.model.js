const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    image: String,
	email: String,
    phone: Number,
    password: String,
    gender: String,
    bloodgroup: String,
    dob: String,
    address: {
        street: String,
        area: String,
        city: String,
        state: String,
        country: String,
        pincode: String
    }
});

const userDb = mongoose.model('userDb', userSchema);
module.exports = userDb;