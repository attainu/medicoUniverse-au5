const mongoose = require('mongoose');
const URI =
	'mongodb+srv://tns1695:atlas2411@cluster0-dn9sr.mongodb.net/test?retryWrites=true&w=majority';
const connectDb = () => {
	console.log("Connecting to db...")
	mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	}).catch(error => {
		console.log("error");
	});
}
	

const disconnectDb = async () => {
    mongoose.connection.close();
}

module.exports = {connectDb, disconnectDb};