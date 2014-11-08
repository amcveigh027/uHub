var express = require('express');
var view = require('swig');
var db = require('mysql');

var app = express();

app.engine('html', view.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

var models = require('./models');
var routes = require('./routes');

routes(app);

app.listen(3000, function () {
    console.log('Express app listening on port 3000');
});
