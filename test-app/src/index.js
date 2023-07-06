"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var config_1 = require("./config/config");
var logger_1 = require("./middleware/logger");
var server = app_1["default"].listen(parseInt(config_1["default"].port), function () {
    logger_1["default"].log('info', "Server is running on Port: ".concat(config_1["default"].port));
});
process.on('SIGTERM', function () {
    logger_1["default"].info('SIGTERM signal received.');
    logger_1["default"].info('Closing http server.');
    server.close(function (err) {
        logger_1["default"].info('Http server closed.');
        process.exit(err ? 1 : 0);
    });
});
