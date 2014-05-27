var PORT = process.env.PORT || 8993,
    HOSTNAME = process.env.HOSTNAME || 'localhost';

module.exports = {
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
    auth : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        }
    }
};
