const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
   
    username:{
        type :String,
        required: true
    },
    email:{
        type :String,
        required: true
    },
    mobile:{
        type :Number,
        required: true
    },
    password:{
        type :String,
        required: true
    },
    date:{
        type: Date,
        Default: Date.now
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;