module.exports = function (grunt) {

    var config = require('./config'),
        CONNECT_PORT = config.grunt.connect.port,
        CONNECT_HOSTNAME = config.grunt.connect.hostname,
        LIVERELOAD_PORT = config.grunt.livereload.port;

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        connect : {
            server : {
                options : {
                    base : './www',
                    port : CONNECT_PORT,
                    hostname : CONNECT_HOSTNAME,
                    open : 'http://' + CONNECT_HOSTNAME + ':' + CONNECT_PORT + '/index.html',
                    livereload : LIVERELOAD_PORT
                }
            }
        },
        watch : {
            js : {
                files : ['js/**/*.js', 'data/**/*.json'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            },
            html : {
                files : ['index.html'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};