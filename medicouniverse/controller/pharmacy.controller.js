const express = require('express');
const app = express();
const multiparty = require('multiparty');
const cloudinary = require('cloudinary').v2;
const session = require('express-session');
const Nexmo = require('nexmo');
const Cart = require('../model/cart');
const MongoStore = require('connect-mongo')(session);
var medicineDb = require('../model/pharmacy.model');
// var babybath = require('../model/babybath.model');
var userDb = require('../model/user');
var Order = require('../model/order');
const jsonData = require('../public/data/medicines.json');
const hospitalmodel =require('../model/hospitalmodels')
const nexmo = new Nexmo({
	apiKey: 'd61633c6',
	apiSecret: '7kfNTn9ZkKnNf5Pi'
});
var pharmacyController = {};

pharmacyController.userSigninget = (req, res) => {
	res.render('user/signin');
};
pharmacyController.userSigninpost = (req, res) => {
	var form = new multiparty.Form({});

	form.parse(req, function(err, fields, files) {
		// console.log('Files: ', files, 'Fields: ', fields);

		var userr = {
			// name: fields.username[0],
			email: fields.email[0],
			// mobile: fields.mobile[0],
			password: fields.password[0]
		};
		// console.log('userr : ', userr);
		userDb.findOne(userr, (err, data) => {
			if (err || !data) {
				console.log('invalid User');
			}
			req.session.user = data;
			console.log(req.session.user);
			res.redirect('/products');
		});
	});
};

//----------------------------
pharmacyController.userSignupget = function(req, res, next) {
	res.render('user/signup');
};

pharmacyController.userSignuppost = (req, res, next) => {
	var form = new multiparty.Form({});

	form.parse(req, function(err, fields, files) {
		// console.log('Files: ', files, 'Fields: ', fields);

		var newUser = {
			name: fields.username[0],
			email: fields.email[0],
			mobile: fields.mobile[0],
			password: fields.password[0]
		};
		// console.log(newUser);
		userDb.create(newUser, (err, result) => {
			if (err) {
				console.log('error in saving user to database>>', err);
			} else {
				console.log('Signup Saved Successfully');
				res.redirect('signin');
			}
		});
	});
};
//-----------------------------
pharmacyController.pharmacy = (req, res) => {
	res.render('pharmacy_home');
};

pharmacyController.products = (req, res) => {
	var data = {};
	medicineDb.find({}, (err, result) => {
		if (err) {
			console.log('Error in finding data');
		} else {
			data.result = result;
			console.log(req.session.user);
		}

		res.render('products', {
			products: data.result
		});
	});
};

var gallery = [];
pharmacyController.postAddProducts = (req, res) => {
	var form = new multiparty.Form({
		uploadDir: 'uploads'
	});
	form.parse(req, function(err, fields, files) {
		cloudinary.uploader.upload(
			files.productImage[0].path,
			{ resource_type: 'image' },
			(err, result) => {
				// console.log(result);
				var addProducts = {
					category: fields.category[0],
					subCategory: fields.subCategory[0],
					productName: fields.productName[0],
					productPrice: fields.productPrice[0],
					discountedPrice: fields.discountedPrice[0],
					imgName: files.productImage[0].originalFilename,
					imgPath: result.url
				};
				medicineDb.create(addProducts, (err, result) => {
					if (err) {
						console.log('error in saving to database>>', err);
					} else {
						console.log('Product Saved Successfully');
						res.redirect('addProducts');
					}
				});
			}
		);
	});
};
pharmacyController.addToCart = function(req, res) {
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	medicineDb.findById(productId, function(err, product) {
		if (err) {
			return res.redirect('/');
		}
		cart.add(product, product.id);
		req.session.cart = cart;
		// console.log('cart session: ', req.session.cart);
		res.redirect('/products');
	});
};

pharmacyController.addProducts = (req, res) => {
	res.render('addProducts');
};
// pharmacyController.horlicksget = (req, res) => {
// 	var productId = req.params.id;
// 	var cart = new Cart(req.session.cart ? req.session.cart : {});
// 	medicineDb.findById(productId, function(err, product) {
// 		if (err) {
// 			return res.redirect('/');
// 		}
// 		cart.add(product, product.id);
// 		req.session.cart = cart;
// 		// console.log('cart session: ', req.session.cart);
// 		res.redirect('/horlicks');
// 	});
// };
pharmacyController.shoppingCartget = (req, res, next) => {
	if (!req.session.cart) {
		return res.render('shoppingCart', { products: null });
	}
	var cart = new Cart(req.session.cart);
	// const from = 'MedicoUniverse';
	// const to = 917011675429;
	// const text = 'your order has been placed and will reach to you soon.';

	// nexmo.message.sendSms(from, to, text, (err, responseData) => {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		if (responseData.messages[0]['status'] === '0') {
	// 			console.log('Message sent successfully.');
	// 		} else {
	// 			console.log(
	// 				`Message failed with error: ${responseData.messages[0]['error-text']}`
	// 			);
	// 		}
	// 	}
	// });

	res.render('shoppingCart', {
		products: cart.generateArray(),
		totalPrice: cart.totalPrice
	});
};
pharmacyController.checkoutget = (req, res, next) => {
	if (!req.session.cart) {
		return res.render('shoppingCart', { products: null });
	}
	var cart = new Cart(req.session.cart);
	res.render('checkout', { total: cart.totalPrice });
};
pharmacyController.checkoutpost = (req, res, next) => {
	var cart = new Cart(req.session.cart);
	var form = new multiparty.Form({});
	form.parse(req, function(err, fields, files) {
		// console.log('Files: ', files, 'Fields: ', fields);
		var order = {
			user: req.session.user,
			cart: cart,
			cardName: fields.cardName[0],
			cardNumber: fields.cardNumber[0],
			address: fields.address[0]
		};
		// console.log(order);
		Order.create(order, (err, result) => {
			if (err) {
				console.log('error in saving order to database>>', err);
			} else {
				console.log('order Saved Successfully');
			}

			res.redirect('placedOrder');
		});
		// req.session.cart = null;
	});
};
pharmacyController.placedOrderget = (req, res, next) => {
	var cart = new Cart(req.session.cart);
	cart = null;
	var orderByUser = {
		cardName: req.session.user
	};
	// console.log(orderByUser);
	Order.findOne(orderByUser, (err, result) => {
		if (err) {
			console.log('Erroe in fetching order data');
		} else {
			console.log('order fetched successfully');
		}
		console.log('result:', result);
		res.render('placedOrder', {
			result: result
		});
	});
};
// pharmacyController.checkoutpost= (req,res,next){
// 	var orderDetails = {
// 		user:req.session.user,
// 		cart: cart
// 	}
// }
pharmacyController.placedOrderpost = (req, res, next) => {
	res.render('placedOrder');
};

pharmacyController.profileget = (req, res, next) => {
	hospitalmodel.patient.find({ user: req.session.user }, function (err, result) {
		if (err) return handleError(err);
		// saved!
		console.log(result)
	});
	Order.find({ user: req.session.user }, function(err, orders) {
		if (err) {
			return res.write('Error!');
		}
		var cart;
		orders.forEach(function(order) {
			cart = new Cart(order.cart);
			order.items = cart.generateArray();
		});
		console.log(orders);
		res.render('user/profile', { orders: orders });
	});
};

// pharmacyController.babybathget = (req, res, next) => {
// 	var data = {};
// 	babybath.find({}, (err, result) => {
// 		if (err) {
// 			console.log('Error in finding data');
// 		} else {
// 			data.result = result;
// 		}
// 		console.log(result);
// 		res.render('babybath', {
// 			baby: data.result
// 		});
// 	});
// };

// pharmacyController.userdataget = (req, res, next) => {
// 	medicineDb.insertMany(jsonData, (err, jsonData) => {
// 		if (err) {
// 			console.log('error in data');
// 		}
// 		res.send(jsonData);
// 	});
// };
module.exports = pharmacyController;
