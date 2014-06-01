var path = require('path');

var express = require('express'),
    connect = require('connect'),
    passport = require('passport'),
    logger = require('winston'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');

var config = require('./config');

logger.log('info', 'Loaded config for %s env', config.NODE_ENV);

var app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// app.use(require('compression')());
// if (config.grunt && config.grunt.livereload && config.grunt.livereload.port) {
//     logger.log('info', 'Injecting livereload middleware for port %s', config.grunt.livereload.port);
//     app.use(require('connect-livereload')({
//         port : config.grunt.livereload.port
//     }));
// }

app.use(connect.static(path.join(__dirname, 'public')));
app.use(cookieParser(config.session.secret));
// app.use(connect.bodyParser());
app.use(session({ secret : config.session.secret }));
app.use(passport.initialize());
app.use(passport.session());
require('./app/routes')(app);

app.listen(config.server.port, function () {
    logger.log('info', 'Listening at http://localhost:%s', config.server.port);
});
