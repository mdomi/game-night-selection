var PORT = 8993;

module.exports = {
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
