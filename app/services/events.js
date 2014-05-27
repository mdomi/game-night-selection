function EventsService() {
}

EventsService.prototype.listEvents = function (cb) {
    process.nextTick(function () {
        cb(null, {
            events : [
                {
                    date : '2014-06-04T18:00:00-0400'
                }
            ]
        });
    });
};

module.exports = EventsService;