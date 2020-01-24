const express = require('express');
const router = express.Router();
const Cart = require('../model/cart');
const flash = require('connect-flash')

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
		res.redirect('/');
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
router.get('/reduce/:id',pharmacyController.reduce)
router.post('/user/signup', pharmacyController.userSignuppost);
router.post('/user/signin', pharmacyController.userSigninpost);
router.get('/shoppingCart', pharmacyController.shoppingCartget);
router.get('/checkout', redirectLogin, pharmacyController.checkoutget);
router.post('/checkout', redirectLogin, pharmacyController.checkoutpost);
router.get('/placedOrder', redirectLogin, pharmacyController.placedOrderget);
router.post('/placedOrder', redirectLogin, pharmacyController.placedOrderpost);
router.get('/profile', redirectLogin, pharmacyController.profileget);
router.get('/logout', redirectLogin , pharmacyController.logout);
router.get('/profile/cancel' , pharmacyController.cancel)

router.post('/deleteAppoitment',redirectLogin,pharmacyController.deleteAppoitmnet);
module.exports = router;
