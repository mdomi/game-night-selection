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
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions : ['js', 'json', 'jade'],
                    watchedFolders : ['config', 'routes', 'views']
                }
            }
        },
        watch : {
            options : {
                livereload : LIVERELOAD_PORT
            },
            jade : {
                files : ['views/**'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            },
            js : {
                files : ['www/js/**/*.js', 'www/data/**/*.json'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.option('force', true);

    grunt.registerTask('default', ['concurrent']);

};