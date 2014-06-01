module.exports = function (app) {
    require('./auth')(app);
    require('./homepage')(app);
    require('./events')(app);
};