const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const mongodb = require('mongodb');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const multiparty = require('multiparty');
const passport = require('passport');
const cloudinary = require('cloudinary').v2;
const medicineDb = require('./model/pharmacy.model');
const connectMedicineDb = require('./model/pharmacy.connection');
// require('./config/passport');
const connectDB = require('./model/db');
const pharmacyRoute = require('./routes/pharmacy.route');
const ambulanceRoute = require('./routes/ambulance_ambulance.route');
const ambulanceDb = require('./model/ambulance.ambulance.model');
const homepageRoutes = require('./routes/homepage.route');
const bookingRoute = require('./routes/booking_doctors.router.js');
const hospitalroute = require('./routes/hospitalroute');
const objectId = mongodb.ObjectID;
const port = 5050;

cloudinary.config({
	cloud_name: 'dps7y8nd7',
	api_key: '398696324368561',
	api_secret: 'gVv49zXvVArE1dRCz3ipg7JTzqw'
});
connectMedicineDb();
connectDB();
app.set('view engine', 'hbs');

app.use(express.static('uploads'));
app.use(express.static('public'));
app.use(express.static('.'));
app.use(
	session({
		secret: 'my pharmacy',
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		cookie: {
			maxAge: 60 * 60 * 1000,
			path: '/',
			httpOnly: true
		}
	})
);
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
app.use(function(req, res, next) {
	res.locals.session = req.session;
	next();
});
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(cookieParser());
app.use(hospitalroute);
// app.use(pharmacyRoute);
app.use(ambulanceRoute);
app.use(homepageRoutes);
app.use(bookingRoute);


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});


app.use(pharmacyRoute)

// app.use(csrfProtection);
app.listen( process.env.PORT || port, () => console.log(`http://localhost:${port}`));
