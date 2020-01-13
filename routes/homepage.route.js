const express = require('express');
const homepageController = require('../controller/homepage.controller');
const router = express.Router();

router.get('/', homepageController.getHomepage);
router.get('/about',homepageController.getAboutUs);
router.get('/mission',homepageController.getMission);

module.exports = router;