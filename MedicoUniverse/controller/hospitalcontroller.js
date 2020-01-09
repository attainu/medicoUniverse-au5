var hospitalcontroller = {};
hospitalcontroller.hospital = function(req,res){
    res.render('./hospital.hbs');
}
module.exports = hospitalcontroller