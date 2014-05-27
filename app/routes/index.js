var homepage = require('./homepage'),
    events = require('./events');

module.exports = function (app) {
    homepage(app);
    events(app);
};