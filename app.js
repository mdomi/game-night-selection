var path = require('path');

var express = require('express'),
    connect = require('connect'),
    compress = require('compression');

var config = require('./config');

var app = express();

app.use(connect.logger());
app.use(compress());
app.use(express.static(path.join(__dirname, 'www')));

app.listen(config.server.port);