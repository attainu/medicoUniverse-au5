const express = require('express');
const router = express.Router();
const Cart = require('../model/cart');

var medicineDb = require('../model/pharmacy.model');
var userDb = require('../model/user');
const pharmacyController = require('../controller/pharmacy.controller');
// var csrf = require('csurf');

// var csrfProtection = csrf();
// router.use(csrfProtection);
const redirectLogin = (req, res, next) => {
	if (!req.session.user) {
		res.redirect('/user/signin');
	} else {
		next();
		// console.log('Session information', req.session.user);
	}
};
const redirectHomepage = (req, res, next) => {
	if (req.session.user) {
		res.redirect('/pharmacy_home');
	} else {
		next();
	}
};

router.get('/user/signup', pharmacyController.userSignupget);
router.get('/user/signin', pharmacyController.userSigninget);
router.get('/pharmacy', pharmacyController.pharmacy);
router.get('/products', pharmacyController.products);
router.get('/addProducts', pharmacyController.addProducts);
router.get('/addToCart/:id', pharmacyController.addToCart);
router.post('/addProducts', pharmacyController.postAddProducts);
router.post('/user/signup', pharmacyController.userSignuppost);
router.post('/user/signin', pharmacyController.userSigninpost);
router.get('/shoppingCart', pharmacyController.shoppingCartget);
router.get('/checkout', pharmacyController.checkoutget);
router.post('/checkout', pharmacyController.checkoutpost);
router.get('/placedOrder', pharmacyController.placedOrderget);
router.post('/placedOrder', pharmacyController.placedOrderpost);
router.get('/profile', pharmacyController.profileget);
// router.get('/productCategory/babybath',pharmacyController.babybathget)

module.exports = router;
