const express = require("express");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5f1bb41330aa479192a8a88a0bbd785a');
const app = express();
app.listen(3000);