var express    = require('express');
var bodyParser = require("body-parser");
var indexPage  = require('./index.js');
var app        = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 *  "/" - routes 
 */
app.get('/', function (req, res) {
  res.send(indexPage.getPage());
});


app.post('/', function (req, res) {
  res.send(indexPage.getPage(req.body));
  // 
});

app.listen(3000, function () {
  console.log('Server start at localhost:3000');
});

