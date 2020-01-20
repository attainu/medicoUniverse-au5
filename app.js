const express = require("express");
const hbs = require("hbs");
const hbsHelpers = require("handlebars-helpers")();
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const multiparty = require("multiparty");
const cloudinary = require("cloudinary").v2;
const dashboardRoutes = require('./routes/dashboard.route');
const connectDb = require('./model/dbConnection');
connectDb.connectDb();
app.use(express.static('public'));
app.listen(6060);
app.set("view engine","hbs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
hbs.registerHelper(hbsHelpers);
app.use(session({
    secret: "r545hg",
    cookie: {
        maxAge: 1000 * 6000,
        path: "/",
        httpOnly: true
    }
}));

cloudinary.config({
    cloud_name: "dps7y8nd7",
    api_key: "398696324368561",
    api_secret: "gVv49zXvVArE1dRCz3i7JTzqw"
});

app.use(function (req,res,next) {
    req.session.user = {name: "Saravanakumar",phone: "986543210", email: "tns1695@gmail.com",image: null};
    next();
})
app.use('/dashboard',dashboardRoutes);