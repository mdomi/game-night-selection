define([
    'modules/games',
    'text!../../data/games.json',
    'services/boardgamegeekservice'
], function (games, gamesData) {

    function GamesService($q, BoardGameGeekService) {

        function readGame(game) {
            return BoardGameGeekService.getGame(game.boardGameGeekId).then(function () {
                return game;
            });
        }

        this.getGames = function () {
            var allGames = JSON.parse(gamesData).games;
            return $q.all(allGames.map(readGame));
        };
    }

    games.service('GamesService', ['$q', 'BoardGameGeekService', GamesService]);
});