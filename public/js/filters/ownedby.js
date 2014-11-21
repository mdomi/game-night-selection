define([
    'underscore',
    'modules/games'
], function (_, games) {

    function ownedByFilterFactory() {
        return function (games, owners) {
            return games.filter(function (game) {
                if (_.isString(owners)) {
                    owners = owners.split(',');
                }
                return _.intersection(owners, game.has).length > 0;
            });
        };
    }

    games.filter('ownedBy', [ownedByFilterFactory]);

    return ownedByFilterFactory;

});
