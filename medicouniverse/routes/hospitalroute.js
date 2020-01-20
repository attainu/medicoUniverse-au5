const express = require('express');
const route = express.Router();
const hospitalcontroller = require('../controller/hospitalcontroller')
route.get('/hospitalsearch',hospitalcontroller.hospital);
route.get('/json',hospitalcontroller.db);
route.post('/storeddata',hospitalcontroller.storeddata);
route.post('/patientdata',hospitalcontroller.patientdata);
// route.get('/mongodbatlas',hospitalcontroller.atlas)
module.exports = route;