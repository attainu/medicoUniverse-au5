// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');
// const mongoose = require('mongoose')
// const flash = require("connect-flash")


// passport.serializeUser(function(user, done) {
// 	done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
// 	User.findById(id, function(err, user) {
// 		done(err, user);
// 	});
// });

// passport.use(
// 	'local.signup',
// 	new LocalStrategy(
// 		{
// 			usernameField: 'email',
// 			passwordField: 'password',
// 			passReqToCallback: true
// 		},
// 		function(req, email, password, done) {
// 			User.findOne({ email: email }, function(err, user) {
// 				if (err) {
// 					return done(err);
// 				}
// 				if (user) {
// 					return done(null, false, { message: 'Email is already in use.' });
// 				}
// 				var newUser = new User();
// 				newUser.email = email;
// 				newUser.password = newUser.encryptPassword(password);
// 				newUser.save(function(err, result) {
// 					if (err) {
// 						return done(err);
// 					}
// 					return done(null, newUser);
// 				});
// 			});
// 		}
// 	)
// );

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose')

userDb = require("../model/user");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" ,passwordField: 'password'}, (email, password, done) => {
  
      userDb.findOne({
        email: email
      }).then(user => {
        if (!user) {
          console.log("Executed 1")
          return done(null, false, { message: 'That email is not registered' });
          
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
			console.log("Executed 2")
			console.log(password,user.password,isMatch),isMatch
            return done(null, user,);
          } else {
            console.log("Executed 3")
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    userDb.findById(id, function(err, user) {
      done(err, user);
    });
  });
};