define([
    'modules/games'
], function (games) {

    function durationFilterFactory() {
        function pad(value) {
            return value < 10 ? '0' + value : value;
        }
        return function (duration) {
            return (duration.hours || 0) + ':' + pad(duration.minutes || 0);
        };
    }

    games.filter('duration', [durationFilterFactory]);

    return durationFilterFactory;

});
