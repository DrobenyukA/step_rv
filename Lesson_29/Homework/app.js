var express    = require('express');
var bodyParser = require("body-parser");
var indexPage  = require('./view/index.js');
var test       = require('./test/test.js');
var app        = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));


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

