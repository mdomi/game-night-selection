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

require(['angular', 'text!../data/games.json'], function (angular, games) {
    'use strict';

    angular.module('games', [])
        .filter('duration', [function () {
            function pad(value) {
                return value < 10 ? '0' + value : value;
            }
            return function (duration) {
                return (duration.hours || 0) + ':' + pad(duration.minutes || 0);
            };
        }])
        .filter('join', [function () {
            return function (values, joiner) {
                return values.join(joiner);
            };
        }])
        .controller('GamesController', ['$scope', function ($scope) {
            $scope.games = JSON.parse(games).games;
        }]);
    
    angular.element().ready(function () {
        angular.bootstrap(document, ['games']);
    });
});