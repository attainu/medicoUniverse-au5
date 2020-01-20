const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongodb = require('mongodb');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const multiparty = require('multiparty');
const passport = require('passport');
const flash = require('connect-flash');
const cloudinary = require('cloudinary').v2;
const medicineDb = require('./model/pharmacy.model');
const connectMedicineDb = require('./model/pharmacy.connection');
// require('./config/passport');
const pharmacyRoute = require('./routes/pharmacy.route');

const objectId = mongodb.ObjectID;
const PORT = 5050;

cloudinary.config({
	cloud_name: 'dps7y8nd7',
	api_key: '398696324368561',
	api_secret: 'gVv49zXvVArE1dRCz3ipg7JTzqw'
});
connectMedicineDb();

app.set('view engine', 'hbs');

app.use(express.static('uploads'));
app.use(express.static('public'));
app.use(
	session({
		secret: 'my pharmacy',
		resave: false,
		saveUninitialized: true,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		cookie: {
			maxAge: 180 * 60 * 1000,
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
app.use(pharmacyRoute);
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(csrfProtection);
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
