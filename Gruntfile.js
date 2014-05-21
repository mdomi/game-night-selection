module.exports = function (grunt) {

    var config = require('./config'),
        CONNECT_PORT = config.grunt.connect.port,
        CONNECT_HOSTNAME = config.grunt.connect.hostname,
        LIVERELOAD_PORT = config.grunt.livereload.port;

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concurrent : {
            dev : {
                tasks : ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon : {
            dev : {
                script : 'app.js',
                options : {
                    callback : function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });

                        nodemon.on('restart', function () {
                            setTimeout(function () {
                                require('fs').writeFileSync('.rebooted', 'rebooted');
                            }, 1000);
                        });
                    }
                }
            }
        },
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
            server : {
                files : ['.rebooted'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            },
            js : {
                files : ['www/js/**/*.js', 'www/data/**/*.json'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            },
            html : {
                files : ['www/index.html'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};