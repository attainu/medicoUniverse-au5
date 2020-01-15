const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const bookingRoute = require('./routes/booking_doctors.router.js')
const app = express();
const PORT = 5050
var connectDB = require("./model/db")
require("dotenv").config();

require('./model/db')
app.set("view engine", "hbs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bookingRoute)
app.use(express.static('.'));


connectDB();

app.listen(PORT,() => console.log(`http://localhost:${PORT}`))



    

