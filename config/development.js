var PORT = 8338;

var config = {
    server : {
        port : PORT
    },
    grunt : {
        connect : {
            hostname : 'localhost',
            port : PORT
        },
        livereload : {
            port : 35730
        }
    }
};

try {
    config.auth = require('./auth.json');
} catch (error) {}

module.exports = config;