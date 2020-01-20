const express = require('express');
const router = express.Router();
const dashboardController = {};


dashboardController.dashboard = function(req,res){
    res.send("welcome")
}



module.exports = dashboardController