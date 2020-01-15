const mongoose = require('mongoose')
const connectDB = () => { mongoose.connect('mongodb+srv://vivek-sharma-au5:vivek1210@medicouniverse-pqz8e.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true}, function(err){
    if(!err){
        console.log("Mongoose connection Successfully established")
    }
    else{
        console.log("Error connecting to DB : " + err)
    }

})
}

module.exports = connectDB;
//mongodb://localhost:27017/doctors