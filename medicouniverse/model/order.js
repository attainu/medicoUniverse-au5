const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	cart: { type: Object, required: true },
	address: { type: String, required: true },
	cardName: { type: String, required: true },
	cardNumber: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
