define([
    'modules/games',
    'services/gamesservice',
    'filters/playerrange',
    'filters/duration',
    'filters/join'
], function (games) {

    function GamesController($scope, GamesService) {
        GamesService.getGames().then(function (games) {
            $scope.games = games;
        });
    }

    games.controller('GamesController', ['$scope', 'GamesService', GamesController]);

    return GamesController;

});