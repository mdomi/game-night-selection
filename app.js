var path = require('path');

var express = require('express'),
    connect = require('connect'),
    logger = require('winston');

var config = require('./config');

logger.log('info', 'Loaded config for %s env', config.NODE_ENV);

var app = express(),
    server = require('http').createServer(app);


app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(connect.logger({
    stream : {
        write : function (message) {
            logger.info(message.replace(/\n$/, ''));
        }
    }
}));

app.use(require('compression')());
if (config.grunt && config.grunt.livereload && config.grunt.livereload.port) {
    logger.log('info', 'Injecting livereload middleware for port %s', config.grunt.livereload.port);
    app.use(require('connect-livereload')({
        port : config.grunt.livereload.port
    }));
}

app.use(express.static(path.join(__dirname, 'public')));

require('./app/routes')(app);

server.listen(config.server.port, function () {
    logger.log('info', 'Listening at http://localhost:%s', config.server.port);
});
