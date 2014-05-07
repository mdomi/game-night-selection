module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect : {
            server : {
                options : {
                    port : 8338,
                    hostname : 'localhost',
                    open : true,
                    keepalive : true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect']);

};