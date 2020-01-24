const mongoose = require('mongoose')
model= require("../model/BookingDoctors.model")
modelTherapist= require('../model/BookingTherapists.model')
modelNurses = require('../model/BookingNurses.model')
modelBabysitters = require('../model/BookingBabysitters.model')
const bookingController = {};
patients = require('../model/booked.patients.model')

// const doctors = require("../public/data/bookings.doctors.json")
// const therapists = require("../public/data/database_therapists.json")
// const nurses = require("../public/data/database_nurses.json")
// const babysitters =  require("../public/data/database_babysitters.json")


bookingController.open = function(req,res){
   var searchKeys = {};
   searchKeys.city = req.query.city;
   searchKeys.type = req.query.type;
   searchKeys.speciality = req.query.mainsearch;
   //console.log(searchKeys)
   res.render("bookingFrontDoctors.hbs", searchKeys)
}

bookingController.bookNow = function(req , res){
console.log(req.session.user.email)
   var patientsName = req.body.patientsName
   var patientsMobile = req.body.patientsMobile
   var preferredTime = req.body.preferredTime
   var patientsAddress = req.body.patientsAddress
   var person = req.session.user.email
  
   
   const patients = {
      
      patientsName : patientsName,
      patientsMobile : patientsMobile,
      preferredTime : preferredTime,
      patientsAddress : patientsAddress,
      person : person,
     
   }

   console.log(patients)

   mongoose.model('patients').insertMany(patients, function(err, results){
            console.log('Data Saved successfully into the database')
           res.render("bookingDoctorsSuccess.hbs")
   });

}


bookingController.find = function(req,res){
  
   mongoose.model('doctors').find({}, function (err, docs) {
       console.log("data in db : " , docs)
       res.render('bookingDoctors.hbs',{
          doctors : docs
       })
    });
};


bookingController.getInput = function(req,res){

   var city = req.body.city
   var service = req.body.service
   var specialization = req.body.specialization
   var data = {
      city : city,
      service : service,
      specialization : specialization
   }

   if(service == "Doctors"){
      mongoose.model('doctors').find({ $and:[{"address": city},{"specialization": specialization}]}, function (err, docs) {
         console.log("data in db : " , docs)
         res.render('bookingDoctors.hbs',{
            doctors : docs
         })
      });
   }
   if(service == "Therapists"){
      mongoose.model('therapists').find({ $and:[{"address": city},{"specialization": specialization}]}, function (err, docs) {
         console.log("data in db : " , docs)
         res.render('bookingDoctors.hbs',{
            doctors : docs
         })
      });

   }
   if(service == "Nurses"){
      mongoose.model('nurses').find({ $and:[{"address": city},{"specialization": specialization}]}, function (err, docs) {
         console.log("data in db : " , docs)
         res.render('bookingDoctors.hbs',{
            doctors : docs
         })
      });
      
   }
   else{
      mongoose.model('babysitters').find({ $and:[{"address": city},{"specialization": specialization}]}, function (err, docs) {
         console.log("data in db : " , docs)
         res.render('bookingDoctors.hbs',{
            doctors : docs
         })
      });
   }

  
   
   console.log(data)
}

module.exports = bookingController;