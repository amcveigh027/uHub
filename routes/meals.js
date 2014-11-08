module.exports = function (app) {
    app.get('/meals', function (req, res) {
        res.render('index', { 'body': 'meals route' });
    });
};
