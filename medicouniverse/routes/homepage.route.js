const express = require('express');
const homepageController = require('../controller/homepage.controller');
const router = express.Router();

router.get('/medicoUniverse', homepageController.getHomepage);
router.get('/medicoUniverse/about', homepageController.getAboutUs);
router.get('/medicoUniverse/mission', homepageController.getMission);

module.exports = router;
