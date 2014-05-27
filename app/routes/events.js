var EventsService = require('../services/events');

module.exports = function (app) {
    app.get('/events', function (req, res) {
        var service = new EventsService();
        service.listEvents(function (error, result) {
            res.send(result.events);
        });
    });
};