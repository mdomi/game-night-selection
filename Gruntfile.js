module.exports = function (grunt) {

    var config = require('./config'),
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

    grunt.registerTask('default', ['concurrent']);

};