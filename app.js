var path = require('path');

var express = require('express'),
    connect = require('connect'),
    logger = require('winston');

var config = require('./config');

var app = express(),
    server = require('http').createServer(app);

app.use(connect.logger({
    stream : {
        write : function (message) {
            logger.info(message.replace(/\n$/, ''));
        }
    }
}));
app.use(require('compression')());
if (config.grunt && config.grunt.livereload && config.grunt.livereload.port) {
    app.use(require('connect-livereload')({
        port : config.grunt.livereload.port
    }));
}
app.use(express.static(path.join(__dirname, 'www')));

server.listen(config.server.port, function () {
    logger.log('info', 'Listening at http://localhost:%s', config.server.port);
});
