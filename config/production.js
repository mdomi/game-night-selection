var PORT = process.env.PORT || 8993,
    HOSTNAME = process.env.HOSTNAME || 'localhost';

module.exports = {
    server : {
        port : PORT
    },
    passport : {
        google : {
            returnURL : 'http://' + HOSTNAME + '/auth/google/return',
            realm : 'http://' + HOSTNAME + '/',
        },
        method : 'google',
        loginUrl : '/login'
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
