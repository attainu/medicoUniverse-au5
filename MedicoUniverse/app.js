const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const bookingRoute = require('./routes/booking_doctors.router.js')
const app = express();
const PORT = 5050

require('./model/db')
app.set("view engine", "hbs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bookingRoute)
app.use(express.static('.'));
app.listen(PORT)