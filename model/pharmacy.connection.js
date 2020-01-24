const mongoose = require('mongoose');
const URI =
	'mongodb+srv://vivek-sharma-au5:vivek1210@medicouniverse-pqz8e.mongodb.net/test?retryWrites=true&w=majority';

const connectMedicineDb = async () => {
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	});
	console.log('Db is connected..!');
};

module.exports = connectMedicineDb;
