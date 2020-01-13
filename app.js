const express = require("express");
const hbs = require('hbs');
const session = require("express-session");
const app = express();

const homepageRoutes = require('./routes/homepage.route');
app.use(express.static('public'));
app.listen(6060);
app.set("view engine","hbs");
app.use(session({
    secret: "r545hg",
    cookie: {
        maxAge: 1000 * 6000,
        path: "/",
        httpOnly: true
    }
}));
app.use(homepageRoutes);