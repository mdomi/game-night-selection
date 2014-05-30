var logger = require('winston').loggers.get('routes.auth'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var conf = require('../../config'),
    UsersService = require('../services/users'),
    users = new UsersService();

passport.use(new GoogleStrategy({
    clientID : conf.auth.google.clientId,
    clientSecret : conf.auth.google.clientSecret,
    callbackURL : conf.passport.google.returnURL,
}, function (accessToken, refreshToken, profile, done) {
    users.findOrCreate({ googleId : profile.id, profile : profile }, function (err, user) {
        if (err) {
            logger.error('Unable to retrieve user: %s', err);
            done(err);
        } else {
            logger.debug('Found user %s', JSON.stringify(user));
            done(null, user);
        }
    });
}));

passport.serializeUser(function (user, done) {
    var serialized = user.googleId;
    logger.debug('Serializing user %s -> %s', user, serialized);
    done(null, serialized);
});

passport.deserializeUser(function (id, done) {
    logger.debug('Deserializing user id %s', id);
    users.find({ googleId : id }, function (err, user) {
        if (err) {
            logger.error('Error retrieving user: %s', err);
            done(err);
        } else {
            logger.debug('Deserialized user: %s', user);
            done(null, user);
        }
    });
});

module.exports = function (app) {
    logger.debug('Setting up Google authorization route');
    app.get('/auth/google', passport.authenticate('google', {
        scope : 'openid'
    }));

    logger.debug('Setting up Google authorization return route');
    app.get('/auth/google/return', passport.authenticate('google', {
        successRedirect : '/',
        failureRedirect : '/auth/google'
    }));

    logger.info('auth routes setup complete');
};
