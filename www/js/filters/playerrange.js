define([
    'modules/games'
], function (games) {

    function playerRangeFilterFactory() {
        return function (players) {
            return players.min + (players.max ? '-' + players.max : '+');
        };
    }

    games.filter('playerRange', [playerRangeFilterFactory]);

    return playerRangeFilterFactory;

});
