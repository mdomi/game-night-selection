var util = require('util');

var _ = require('underscore'),
    winston = require('winston');

var logger = winston.loggers.get('users');

function UsersService() {
    this.users = [];
    logger.debug('UsersService initialized()');
}

UsersService.prototype.list = function (cb) {
    logger.debug('UsersService list()');
    process.nextTick(function () {
        cb(null, this.users);
    });
};

function UserNotFoundError(query) {
    Error.call(this);
    this.message = util.format('User matching query %s not found', JSON.stringify(query));
}

UsersService.prototype.find = function (query, cb) {
    logger.debug('UsersService find(%s)', JSON.stringify(_.pick(query, 'googleId')));
    var service = this;
    process.nextTick(function () {
        var user = _.findWhere(service.users, { googleId : query.googleId });
        if (user) {
            logger.debug('UsersService find() found user %s', user.googleId);
            cb(null, user);
        } else {
            logger.debug('UsersService find() user not found');
            cb(new UserNotFoundError(query));
        }
    });
};

UsersService.prototype.findOrCreate = function (query, cb) {
    logger.debug('UsersService findOrCreate(%s)', JSON.stringify(query));
    var service = this;
    service.find({ openId : query.openId }, function (error, user) {
        if (error instanceof UserNotFoundError) {
            service.add(query, cb);
        } else {
            cb(error, user);
        }
    });
};

UsersService.prototype.add = function (user, cb) {
    logger.debug('UsersService add(%s)', JSON.stringify(user));
    var service = this;
    process.nextTick(function () {
        service.users.push(user);
        cb(null, user);
    });
};

module.exports = UsersService;