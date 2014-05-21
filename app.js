var path = require('path');

var express = require('express'),
    connect = require('connect');

var config = require('./config');

var app = express();

app.use(require('compression')());
app.use(connect.logger());
if (config.grunt && config.grunt.livereload && config.grunt.livereload.port) {
    app.use(require('connect-livereload')({
        port : config.grunt.livereload.port
    }));
}
app.use(express.static(path.join(__dirname, 'www')));

app.listen(config.server.port);