var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send('You are using the Candy API. Start at /candies');
});

app.use('/candies', require('./controllers/candies'));

app.listen(3000);

module.exports = app;