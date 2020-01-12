const express = require("express");
const hbs = require('hbs');
const app = express();

const homepageRoutes = require('./routes/homepage.route');
app.use(express.static('public'));
app.listen(6060);
app.set("view engine","hbs")
app.use(homepageRoutes);