var logger = require('winston').loggers.get('routes.auth');

var conf = require('../../../config');

module.exports = function (app) {
    logger.debug('Setting up login route %s', conf.passport.loginUrl);
    app.get(conf.passport.loginUrl, function (req, res) {
        res.render('login');
    });
};
