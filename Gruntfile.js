module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect : {
            server : {
                options : {
                    port : 8338,
                    hostname : 'localhost',
                    open : true,
                    livereload : true
                }
            }
        },
        watch : {
            js : {
                files : ['js/**/*.js', 'data/**/*.json'],
                options : {
                    livereload : true
                }
            },
            html : {
                files : ['index.html'],
                options : {
                    livereload : true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);

};