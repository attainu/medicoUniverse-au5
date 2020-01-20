const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session')
const loginRoute =require("./routes/users")
const app = express();
const PORT = process.env.PORT || 5050
var connectDB = require("./model/db")
require("./config/passport")(passport);

require("dotenv").config();
app.set("view engine", "hbs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('.'));
app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);


app.use(passport.initialize());
app.use(passport.session());


app.use(flash());


app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use(loginRoute)
app.use("/", require("./routes/index"))


connectDB();
app.listen(PORT,() => console.log(`http://localhost:${PORT}`))