var express = require('express');
var parser = require('body-parser');
var path = require('path');

var app = express();


// Passport middleware
app.use(parser.urlencoded({ extended: true }) );
app.use(parser.json());

app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Now listening on port: ', port);
});
