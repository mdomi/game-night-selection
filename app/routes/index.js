var auth = require('./auth'),
    homepage = require('./homepage'),
    events = require('./events');

module.exports = function (app) {
    auth(app);
    homepage(app);
    events(app);
};