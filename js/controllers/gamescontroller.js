define([
    'modules/games',
    'services/gamesservice',
    'filters/playerrange',
    'filters/duration',
    'filters/join'
], function (games) {

    function GamesController($scope, GamesService) {
        $scope.games = GamesService.getGames();
    }

    games.controller('GamesController', ['$scope', 'GamesService', GamesController]);

    return GamesController;

});