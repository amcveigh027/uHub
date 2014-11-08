var meals = require('./meals');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {'body': 'from views'});
    });

    meals(app);
};
