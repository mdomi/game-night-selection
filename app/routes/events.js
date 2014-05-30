var EventsService = require('../services/events');

var service = new EventsService();

module.exports = function (app) {
    app.get('/events', require('../middleware/isloggedin'), function (req, res) {
        service.listEvents(function (error, result) {
            res.send(result.events);
        });
    });
};