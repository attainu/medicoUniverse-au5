const express = require('express')
const loginController = require("../controller/login.controller")
const router = express.Router();
const passport = require('passport');
require("../config/passport")(passport);
const { forwardAuthenticated } = require('../config/auth');

router.get("/login",forwardAuthenticated , loginController.login)
router.post("/login", loginController.loginPost)
router.get("/signup",forwardAuthenticated , loginController.signup)
router.post("/signup", loginController.signupPost)
router.post("/logout", loginController.logout)

module.exports = router;