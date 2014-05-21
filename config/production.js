var PORT = 80;

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
