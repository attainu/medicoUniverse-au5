const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const dashboardRoutes = require('./routes/dashboard.route');

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
app.use(dashboardRoutes);