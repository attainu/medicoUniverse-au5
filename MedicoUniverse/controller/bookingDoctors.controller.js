// const model = require('../model/booking.model.js')
const mongoose = require('mongoose')
const bookingController = {};
const doctors = require("../public/data/bookings.doctors.json")


bookingController.open = function(req,res){
   res.render("bookingDoctors.hbs")
}
bookingController.insert = function(req,res){
  
   mongoose.model('doctors').insertMany(doctors, function(err, results){
      console.log('data Saved successfully into the database')
      res.send(doctors);
   });
 
};
bookingController.find = function(req,res){
  
   mongoose.model('doctors').find({}, function (err, docs) {
       console.log("data in db : " , docs)
       res.render('bookingDoctors.hbs',{
          doctors : docs
       })
    });
};
bookingController.show = function(req,res){
   res.render('bookingFrontDoctors.hbs')
}
bookingController.getInput = function(req,res){
   var city = req.body.city
   var service = req.body.service
   var specialization = req.body.specialization

   data = {
      city : city,
      service : service,
      specialization : specialization
   }
   res.send(data)
   console.log(data)
}

module.exports = bookingController;