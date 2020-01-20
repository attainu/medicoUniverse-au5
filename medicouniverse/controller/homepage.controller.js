var getHomepage = function(req, res) {
	//for test
	//req.session.user = {name: "Saravanakumar T N"};
	if (req.session.user) {
		res.render('homepage', { user: req.session.user });
	} else {
		res.render('homepage');
	}
};

var getAboutUs = function(req, res) {
	res.render('aboutus');
};

var getMission = function(req, res) {
	res.render('mission');
};

module.exports = { getHomepage, getAboutUs, getMission };
