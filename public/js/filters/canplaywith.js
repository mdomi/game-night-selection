define([
    'underscore',
    'modules/games'
], function (_, games) {

    function canPlayWithFilterFactory() {
        return function (gameList, count) {
            return gameList.filter(function (game) {
                var min = game.bgg.minPlayers,
                    max = game.bgg.maxPlayers;
                return min <= count && max >= count;
            });
        };
    }

    games.filter('canPlayWith', [canPlayWithFilterFactory]);

    return canPlayWithFilterFactory;

});
