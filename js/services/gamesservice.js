define([
    'modules/games',
    'text!../../data/games.json'
], function (games, gamesData) {

    function GamesService() {
        
    }

    GamesService.prototype.getGames = function () {
        return JSON.parse(gamesData).games;
    };

    games.service('GamesService', [GamesService]);
});