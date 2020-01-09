const express = require('express')
const app = express();
const hbs = require('hbs')
const hospitalroute = require('./route/hospitalroute');
app.use(hospitalroute);
app.use(express.static('public'))
app.listen(6060);
