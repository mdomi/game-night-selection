require.config({
    paths : {
        'angular' : [
            '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.15/angular.min',
            '../bower_components/angular/angular.min'
        ],
        'angular-resource' : [
            '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.16/angular-resource.min',
            '../bower_components/angular-resource/angular-resource.min'
        ],
        'text' : [
            '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
            '../bower_components/requirejs-text/text'
        ],
        'jquery' : [
            '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
            '../bower_components/jquery/dist/jquery.min'
        ],
        'google.signin' : [
            'https://apis.google.com/js/client:plusone'
        ]
    },
    shim : {
        'angular' : {
            exports : 'angular',
            deps : ['jquery']
        },
        'angular-resource' : {
            deps : ['angular']
        }
    }
});

require([
    'jquery',
    'angular',
    'controllers/gamescontroller'
], function ($, angular) {
    'use strict';

    $(function() {
        var $signOut = $('#sign-out').on('click', function () {
            window.gapi.auth.signOut();
        });
        window.signinCallback = function (result) {
            window.console.log(result);
            if (result) {
                if (result.status.signed_in) {
                    // $signOut.removeClass('hide');
                    $('#sign-in').addClass('hide');
                } else {
                    $signOut.addClass('hide');
                    $('#sign-in').removeClass('hide');
                }
            }
        };
        require(['google.signin']);
    });
    
    angular.element().ready(function () {
        angular.bootstrap(document, ['games']);
    });
});