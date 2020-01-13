
var getHomepage = function (req,res) {
    //req.session.user = {name: "Saravanakumar T N", image: "https://accounts.practo.com/profile_picture/9936369/medium_thumbnail"};
    if (req.session.user) {
        res.render('homepage',{user: req.session.user});
    } else{
        res.render('homepage');
    }
    
}

var getAboutUs = function (req,res) {
    res.render('aboutus');
}

var getMission = function (req,res) {
    res.render('mission');
}


module.exports = {getHomepage,getAboutUs,getMission};