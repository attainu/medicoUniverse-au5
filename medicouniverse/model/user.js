const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	name: { type: String, required: true },
	mobile: { type: Number, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true }
});
// userSchema.methods.encryptPassword = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(5),null);
// };

// userSchema.methods.validPassword = function (password) {
// 	return bcrypt.compareSync(password,this.password)
//   }
const userDb = mongoose.model('userDb', userSchema);
module.exports = userDb;
