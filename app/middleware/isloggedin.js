var logger = require('winston').loggers.get('middleware.isloggedin');

var conf = require('../../config');

module.exports = function (req, res, next) {
    var isAuthenticated = req.isAuthenticated();

    logger.debug('isAuthenticated = %s', isAuthenticated);

    if (isAuthenticated) {
        logger.debug('Continuing to next middleware handler');
        next();
    } else {
        logger.debug('Redirecting to login url %s', conf.passport.loginUrl);
        res.redirect(conf.passport.loginUrl);
    }
};
