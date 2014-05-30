var passport = require('passport');

var config = require('../../config');

module.exports = function (app) {
    app.get('/', require('../middleware/isloggedin'), function (req, res) {
        res.render('index', {
            clientId : config.auth.google.clientId
        });
    });
};