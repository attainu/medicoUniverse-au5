var userDb = require('../model/user.model');
const multiparty = require("multiparty");
const cloudinary = require("cloudinary");
var disc = require('../model/dbConnection');

var getDashProfile = function (req, res) {
    userDb.findOne({ email: req.session.user.email },
        function (err, docs) {
            res.render('dashboardProfile', { user: docs });
        });
}

var getDashAppointments = function (req, res) {
    disc.disconnectDb();
    res.render('dashboardAppointments', { user: req.session.user });
}

var getDashOrders = function (req, res) {
    res.render('dashboardOrders', { user: req.session.user });
}

var getUser = function (req,res) {
    userDb.findOne({ email: req.session.user.email },
        function (err, docs) {
            res.send(docs);
        });
}

var postProfile = function (req, res) {
    var form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        cloudinary.uploader.upload(files.image[0].path,
            function (result, error) {
                userDb.findOne({ email: req.session.user.email },
                    function (err, docs) {
                        var user = { address: {} };
                        if (docs.name != fields.name[0]) {
                            user.name = fields.name[0];
                        }
                        if (docs.gender != fields.gender[0]) {
                            user.gender = fields.gender[0];
                        }
                        if (files.image[0].size != 0) {
                            user.image = result.url;
                        }
                        if (docs.bloodgroup != fields.bloodgroup[0]) {
                            user.bloodgroup = fields.bloodgroup[0];
                        }
                        if (docs.dob != fields.dob[0]) {
                            user.dob = fields.dob[0];
                        }
                        user.address.street = fields.addressStreet[0];
                        user.address.area = fields.addressArea[0];
                        user.address.city = fields.addressCity[0];
                        user.address.state = fields.addressState[0];
                        user.address.country = fields.addressCountry[0];
                        user.address.pincode = fields.addressPincode[0];
                       
                        userDb.updateOne({ email: req.session.user.email },user,
                            function (err, docs) {
                                res.redirect('/dashboard/profile');
                            });
                    });
            }
        );
    });
}

var postPhone = function (req,res) {
    userDb.updateOne({ email: req.session.user.email },{phone: req.body.phone},
        function (err, docs) {
            res.redirect('/dashboard/profile');
        });
}

module.exports = { getDashProfile, getDashAppointments, getDashOrders, postProfile, getUser, postPhone };