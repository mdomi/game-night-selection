var PORT = process.env.PORT || 8993;

module.exports = {
    server : {
        port : PORT
    },
    auth : {
        google : {
            clientId : process.env.GOOGLE_CLIENT_SECRET
        }
    }
};
