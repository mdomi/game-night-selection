var conf = require('../../config'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,
    UsersService = require('../services/users'),
    users = new UsersService();

passport.use(new GoogleStrategy({
    returnURL : conf.passport.google.returnURL,
    realm : conf.passport.google.realm
}, function (identifier, profile, done) {
    users.findOrCreate({ openId : identifier, profile : profile }, function (err, user) {
        console.log(err, user);
        done(err, user);
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user.openId);
});

passport.deserializeUser(function (id, done) {
    users.find({ openId : id }, function (err, user) {
        done(err, user);
    });
});

module.exports = function (app) {
    app.get('/auth/google', passport.authenticate('google'));
    app.get('/auth/google/return', passport.authenticate('google', {
        successRedirect : '/'
    }));
};
