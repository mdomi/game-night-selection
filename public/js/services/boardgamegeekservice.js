define([
    'modules/games',
    'angular-resource'
], function (games) {

    function BoardGameGeekService($q, $resource) {

        this.getGame = function (id) {
            var cached = window.localStorage['thing/' + id];
            if (cached) {
                return $q.when(JSON.parse(cached));
            }
            return $resource('http://bgg-json.azurewebsites.net/thing/:id', {}, {
                get : { 
                    method : 'JSONP',
                    params : {
                        callback: 'JSON_CALLBACK'
                    }
                }
            }).get({
                id : id
            }).$promise.then(function (result) {
                window.localStorage['thing/' + id] = JSON.stringify(result);
                return result;
            });
        };
    }

    games.service('BoardGameGeekService', ['$q', '$resource', BoardGameGeekService]);

    return BoardGameGeekService;

});