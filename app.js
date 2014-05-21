var path = require('path');

var express = require('express'),
    compress = require('compression');

var config = require('./config');

var app = express();

app.use(express.logger());
app.use(compress());
app.use(express.static(path.join(__dirname, 'www')));

app.listen(config.server.port);