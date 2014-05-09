require.config({
    paths : {
        'angular' : [
            '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.15/angular.min',
            '../bower_components/angular/angular.min'
        ],
        'text' : [
            '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
            '../bower_components/requirejs-text/text'
        ],
        'jquery' : [
            '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
            '../bower_components/jquery/dist/jquery.min'
        ]
    },
    shim : {
        'angular' : {
            exports : 'angular',
            deps : ['jquery']
        }
    }
});

require([
    'angular',
    'controllers/gamescontroller'
], function (angular) {
    'use strict';
    
    angular.element().ready(function () {
        angular.bootstrap(document, ['games']);
    });
});