module.exports = function (grunt) {

    var config = require('./config');

    var LIVE_RELOAD_PORT = 35729,
        CONNECT_HOSTNAME = 'localhost',
        CONNECT_PORT = 8338;

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect : {
            server : {
                options : {
                    base : './www',
                    port : CONNECT_PORT,
                    hostname : CONNECT_HOSTNAME,
                    open : 'http://' + CONNECT_HOSTNAME + ':' + CONNECT_PORT + '/index.html',
                    livereload : LIVE_RELOAD_PORT
                }
            }
        },
        watch : {
            js : {
                files : ['js/**/*.js', 'data/**/*.json'],
                options : {
                    livereload : LIVE_RELOAD_PORT
                }
            },
            html : {
                files : ['index.html'],
                options : {
                    livereload : LIVE_RELOAD_PORT
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};