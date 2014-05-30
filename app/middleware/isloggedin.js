var logger = require('winston').loggers.get('middleware.isloggedin');

module.exports = function (req, res, next) {
    var isAuthenticated = req.isAuthenticated();

    console.log(req.session);

    logger.debug('isAuthenticated = %s', isAuthenticated);

    if (isAuthenticated) {
        logger.debug('Continuing to next middleware handler');
        next();
    } else {
        logger.debug('Redirecting to login');
        res.redirect('/login');
    }
};
