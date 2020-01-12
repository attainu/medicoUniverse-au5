const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('hbs');
const session = require('express-session');
const mongodb = require('mongodb');
const multiparty = require('multiparty');
const cloudinary = require('cloudinary').v2;
const ambulanceRoute = require('./routes/ambulance_ambulance.route');
const ambulanceDb = require('./model/ambulance.ambulance.model');
const connectDb = require('./model/ambulance.connection');
const PORT = 5050;

connectDb();
app.set('view engine', 'hbs');

app.use(ambulanceRoute);
// app.use(express.static('uploads'));
app.use(express.static('public'));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
// app.use(
// 	session({
// 		secret: 'Lets complete',
// 		cookie: {
// 			maxAge: 1000 * 10000,
// 			path: '/',
// 			httpOnly: true
// 		}
// 	})
// );

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
