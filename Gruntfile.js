module.exports = function (grunt) {

    var config = require('./config');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect : {
            server : {
                options : {
                    base : './www',
                    port : config.grunt.connect.port,
                    hostname : config.grunt.connect.hostname,
                    open : 'http://' + config.grunt.connect.hostname + ':' + config.grunt.connect.port + '/index.html',
                    livereload : config.grunt.livereload.port
                }
            }
        },
        watch : {
            js : {
                files : ['js/**/*.js', 'data/**/*.json'],
                options : {
                    livereload : config.grunt.livereload.port
                }
            },
            html : {
                files : ['index.html'],
                options : {
                    livereload : config.grunt.livereload.port
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};