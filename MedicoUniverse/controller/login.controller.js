const mongoose = require('mongoose')
const loginController = {};
User = require("../model/User")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const flash = require('connect-flash');
require("../config/passport")(passport);


loginController.login = function(req,res){
   
    res.render("login.hbs")
    
}
loginController.loginPost = function(req,res,next){
    console.log(req.body.email,req.body.password)
    passport.authenticate("local", {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
      })(req, res, next);
    
}

loginController.signup = function(req ,res){
        
        res.render("signup.hbs", {
            mismatch: req.query.mismatch,
            invalidlength: req.query.invalidlength,
            invalidPasslength: req.query.invalidPasslength,
            invalidEmail: req.query.invalidEmail,
            success: req.query.success
        });
        
    
}
loginController.signupPost = function(req, res){
 
    var username = req.body.username
    var email = req.body.email
    var mobile = req.body.mobile
    var password = req.body.password
    var confirm_password = req.body.confirm_password
    
    
    var user = {
        username : username,
        email : email ,
        mobile : mobile ,
        password : password ,
        confirm_password : confirm_password
    }
    console.log(user)

    if(password !== confirm_password){
        console.log("Hey, your password and confirm password are mismatching");
        res.redirect("/signup?mismatch=true")
    }

    if(mobile.length != 10 ){
        console.log("Hey, All fields are mandatory");
        res.redirect("/signup?invalidlength=true")
    }
    if (password.length < 8) {
        console.log("Hey, All fields are mandatory");
        res.redirect("/signup?invalidPasslength=true")
    }
    else{
        User.findOne({email :email})
         .then(user => {
             if(user){
                console.log("Email already Registered");
                res.redirect("/signup?invalidEmail=true")
             }
             else{
                 const newUser = new User({
                     username,
                     email,
                     mobile,
                     password,
                 })
                 bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                      newUser
                        .save()
                        .then(user => {
                          res.redirect("/signup?success=true");
                        })
                        .catch(err => console.log(err));
                    });
                  });
             }
         })
    }
}

loginController.signupPost = function(req, res){
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
  };

module.exports = loginController