const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/doctors',{useNewUrlParser: true}, function(err){
    if(!err){
        console.log("Mongoose connection Successfully established")
    }
    else{
        console.log("Error connecting to DB : " + err)
    }
})

require('./bookingDoctors.model')