define([
    'modules/games'
], function (games) {

    function joinFilterFactory() {
        return function (values, joiner) {
            return values.join(joiner);
        };
    }

    games.filter('join', [joinFilterFactory]);

    return joinFilterFactory;

});
