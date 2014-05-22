var config = require('../../config');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            clientId : config.auth.google.clientId
        });
    });
};