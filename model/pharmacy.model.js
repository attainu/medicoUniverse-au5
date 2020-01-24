const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const medicineSchema = new Schema({
	category: String,
	subCategory: String,
	productName: String,
	productPrice: Number,
	discountedPrice: String,
	imgPath: String
});

const medicineDb = mongoose.model('medicineDb', medicineSchema);
// const babybath = mongoose.model('babybath', medicineSchema);

module.exports = medicineDb;
// module.exports = babybath;
