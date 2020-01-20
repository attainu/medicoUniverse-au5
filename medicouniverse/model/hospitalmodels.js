const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vivek-sharma-au5:vivek1210@medicouniverse-pqz8e.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const hospitalSchema = new mongoose.Schema({
  longitude: Number,
  latitude: Number,
  hname: String,
  address: String,
  pincode: Number,
  phoneNumber: Number
});
const newsSchema = new mongoose.Schema({
  source: {
    id: String,
    name: String
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String

});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection Successful!");
});
const hospitalmodel = {}
hospitalmodel.mysuru = mongoose.model('mysuru', hospitalSchema, 'mysuru');
hospitalmodel.banglore = mongoose.model('banglore', hospitalSchema, 'banglore');
hospitalmodel.belagavi = mongoose.model('belagavi', hospitalSchema, 'belagavi');
hospitalmodel.dharwad = mongoose.model('dharwad', hospitalSchema, 'dharwad');
hospitalmodel.news = mongoose.model('news', newsSchema, 'news');
module.exports = hospitalmodel;
