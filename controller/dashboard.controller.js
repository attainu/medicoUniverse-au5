

var getDashboard = function (req,res) {
    req.session.user = {name: "Saravanakumar",phone: "986543210", email: "tns1695@gmail.com"};
    res.render('dashboard',{user: req.session.user});
}

module.exports = {getDashboard};