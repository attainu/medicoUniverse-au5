const express = require('express');
const app = express();
const mongoose = require('mongoose')
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
const hospitalmodel = require('../model/hospitalmodels');
<<<<<<< HEAD
=======
patients = require("../model/booked.patients.model")
>>>>>>> a62b9123304fae5d48430eccc8a8471715f015f3
const nexmo = new Nexmo({
	apiKey: 'd61633c6',
	apiSecret: '7kfNTn9ZkKnNf5Pi'
});
var pharmacyController = {};

pharmacyController.userSigninget = (req, res) => {
	res.render('user/signin',{
		invalidUser: req.query.invalidUser,
		incorrectPsd: req.query.incorrectPsd
	});
};







pharmacyController.userSigninpost = (req, res,next) => {
	
	// passport.authenticate("local", {

	// 	successRedirect: '/',
	// 	failureRedirect: '/user/signin',
	// 	failureFlash: true,
		
	//   })(req,res,next);
 
	var form = new multiparty.Form({});

	form.parse(req, function(err, fields, files) {
		// console.log('Files: ', files, 'Fields: ', fields);

		var email = fields.email[0];
		var password = fields.password[0]; 

		var userr = {
			// name: fields.username[0],
			email: fields.email[0],
			// mobile: fields.mobile[0],
			password: fields.password[0]
		};
		console.log('userr : ', userr);
		userDb.findOne(userr, (err, data) => {
			if (err || !data){
				console.log('invalid User');
				res.redirect("/user/signin?invalidUser=true")
			}
			else{
				req.session.user = data;
				console.log(req.session.user);
				res.redirect('/profile');
			}
			
		});

        // userDb.findOne({email :email},(err, data) => {

		// 	.then(user => {
		// 		if(!password){
		// 		   console.log("Email already Registered");
		// 		   res.redirect("/user/signin?incorrectPsd=true")
		// 		}
		// 		if(err || !data) {
		// 				   console.log('invalid User');
		// 				   res.redirect("/user/signin?invalidUser=true")
		// 			   }
		// 		else{
		// 		   req.session.user = data;
		// 			   console.log(req.session.user);
		// 			   res.redirect('/profile');
				   
		// 		}
		// 	})


		// })
         


	});
	
	  
};

//----------------------------
pharmacyController.userSignupget = function(req, res, next) {
	res.render('user/signup',{
		mismatch: req.query.mismatch,
		invalidlength: req.query.invalidlength,
		invalidPasslength: req.query.invalidPasslength,
		invalidEmail: req.query.invalidEmail,
		success: req.query.success
	});
};

pharmacyController.userSignuppost = (req, res, next) => {
	var form = new multiparty.Form({});

	form.parse(req, function(err, fields, files) {
		// console.log('Files: ', files, 'Fields: ', fields);

	
            var name = fields.username.toString()
			var email = fields.email.toString()
			var mobile = fields.mobile.toString()
			var password = fields.password.toString()
			var confirm_password = fields.confirm_password.toString()
			 
			var user = {
				name : name,
				email : email ,
				mobile : mobile ,
				password : password ,
				confirm_password : confirm_password
			}

			var newUser = {
				name: fields.username[0],
				email: fields.email[0],
				mobile: fields.mobile[0],
				password: fields.password[0]
			};
	
		console.log(user)

		// var user = {
		// 	name: fields.username[0],
		// 	email: fields.email[0],
		// 	mobile: fields.mobile[0],
		// 	password: fields.password[0]
		// };
		console.log(user);

		if(password !== confirm_password){
			console.log("Hey, your password and confirm password are mismatching");
			res.redirect("/user/signup?mismatch=true")
		}
		else if(mobile.length != 10 ){
			console.log("Hey, All fields are mandatory");
			res.redirect("/user/signup?invalidlength=true")
		}
		else if (password.length < 8) {
			console.log("Hey, All fields are mandatory");
			res.redirect("/user/signup?invalidPasslength=true")
		}
		else{
		// userDb.create(newUser, (err, result) => {
		// 	if (err) {
		// 		console.log('error in saving user to database>>', err);
		// 	} else {
		// 		console.log('Signup Saved Successfully');
		// 		res.redirect('signin');
		// 	}
		// });

		userDb.findOne({email :email})
         .then(user => {
             if(user){
                console.log("Email already Registered");
                res.redirect("/user/signup?invalidEmail=true")
             }
             else{
                 userDb.create(newUser, (err, result) => {
			if (err) {
				console.log('error in saving user to database>>', err);
			} else {
				console.log('Signup Saved Successfully');
				res.redirect('/user/signup?success=true');
			}
			});
             }
         })
	}
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

pharmacyController.shoppingCartget = (req, res, next) => {
	if (!req.session.cart) {
		return res.render('shoppingCart', { products: null });
	}
	var cart = new Cart(req.session.cart);
	

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
				console.log('order Placed Successfully');
				req.session.abc = order;
			}

			res.render('placedOrder',{
				result:order

			});
		});
		// req.session.cart = null;
	});
};
pharmacyController.placedOrderget = (req, res, next) => {
	var cart = new Cart(req.session.cart);

	var orderByUser = {};
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
		// req.session.cart = null;
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
<<<<<<< HEAD

		// patientsDB.patients.find({person: req.session.user.email},function (err, docs){
		// 	if (err) throw err
		// 	console.log(docs)

			
		// })

		hospitalmodel.patient.find({store : req.session.user.email}, function (err, result) {
			if (err) throw err
=======
>>>>>>> a62b9123304fae5d48430eccc8a8471715f015f3

		hospitalmodel.patient.find({ store: req.session.user.email }, function(err,result) {
			if (err) throw err;
			// saved!

			mongoose.model('patients').find({person: req.session.user.email}, function (err, docs) {
				if (err) throw err
				console.log("data in db : " , docs)
<<<<<<< HEAD
				res.render('user/profile', 
			{ 
				orders: orders,
				patient : result,
				patients : docs[0],
				pricehospital : Number(result.length*200)
				
			});	
			});
		});
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
=======
			
			res.render('user/profile', 
			{ 
				orders: orders,
				patient : result,
				pricehospital : Number(result.length*200),
				patients : patients

			});
				
		});
			
			
	
	});
});
}

pharmacyController.logout = (req, res, next) => {

	req.session.destroy(function(err){
		console.log("Session Destroyed !!")
		res.redirect("/")
	})
}


>>>>>>> a62b9123304fae5d48430eccc8a8471715f015f3
module.exports = pharmacyController;
