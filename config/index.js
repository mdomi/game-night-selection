var util = require('util'),
    path = require('path');

var ERROR_TEMPLATE = 'No config matching NODE_ENV=%s. Requires "%s.js"',
    env = process.env.NODE_ENV || 'development',
    config,
    configFile = './' + env;

try {
    config = require(configFile);
    config.NODE_ENV = env;
} catch (error) {
    if (error.code && error.code === 'MODULE_NOT_FOUND') {
        console.error(util.format(ERROR_TEMPLATE, env, path.join(__dirname, env)));
        process.exit(1);
    } else {
        throw error;
    }
}

module.exports = config;