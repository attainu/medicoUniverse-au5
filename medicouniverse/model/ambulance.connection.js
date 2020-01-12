const mongoose = require('mongoose');
const URI =
	'mongodb+srv://avi123:avi123@medicouniverse-qalqh.mongodb.net/test?retryWrites=true&w=majority';
const connectDb = async () => {
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	console.log('Db is connected..!');
};

module.exports = connectDb;
