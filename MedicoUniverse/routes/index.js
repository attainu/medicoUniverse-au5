const express = require("express")
const dashboardController = require("../controller/dashboard.controller")
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


router.get("/dashboard",ensureAuthenticated, dashboardController.dashboard)

module.exports = router;