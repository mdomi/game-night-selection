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
        jshint : {
            all : {
                src : [ 'Gruntfile.js', 'public/js/**/*.js', 'app/**/*/js'],
                options : {
                    jshintrc : true
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
                files : ['app/views/**'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            },
            js : {
                files : ['public/js/**', 'public/data/**', 'app/**/*.js'],
                tasks : ['jshint'],
                options : {
                    livereload : LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.option('force', true);

    grunt.registerTask('default', ['concurrent']);

};