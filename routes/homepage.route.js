const express = require('express');
const homepageController = require('../controller/homepage.controller');
const router = express.Router();

router.get('/', homepageController.getHomepage);

module.exports = router;