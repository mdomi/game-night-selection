module.exports = function (app) {
    require('./login')(app);
    require('./google')(app);
};
