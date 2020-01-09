const express = require('express');
const route = express.Router();
const hospitalcontroller = require('../controller/hospitalcontroller.js')
module.exports = route;
route.get('/',hospitalcontroller.hospital)
