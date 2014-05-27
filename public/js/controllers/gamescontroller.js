define([
    'modules/games',
    'services/gamesservice',
    'services/eventsservice',
    'filters/playerrange',
    'filters/duration',
    'filters/join'
], function (games) {

    function GamesController($scope, GamesService, EventsService) {
        GamesService.getGames().then(function (games) {
            $scope.games = games;
        });
        $scope.events = EventsService.listEvents();
    }

    games.controller('GamesController', ['$scope', 'GamesService', 'EventsService', GamesController]);

    return GamesController;

});