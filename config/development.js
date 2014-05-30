var HOSTNAME = 'localhost',
    PORT = 8993;

var config = {
    server : {
        port : PORT
    },
    passport : {
        google : {
            returnURL : 'http://' + HOSTNAME + ':' + PORT + '/auth/google/return',
            realm : 'http://' + HOSTNAME + ':' + PORT + '/',
        }
    },
    session : {
        secret : 'game-night-selection'
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