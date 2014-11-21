define([
    'modules/games',
], function (games) {

    function EventsService($resource) {

        var Event = $resource('/events');

        return {
            listEvents : function () {
                return Event.query();
            }
        };
    }

    games.service('EventsService', ['$resource', EventsService]);
});