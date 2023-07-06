"use strict";
exports.__esModule = true;
var config_1 = require("../config/config");
var winston_1 = require("winston");
var logger = (0, winston_1.createLogger)({
    level: config_1["default"].node_env === 'production' ? 'info' : 'debug',
    format: winston_1.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `status.log`
        //
        new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston_1.transports.File({ filename: 'logs/status.log' }),
    ],
    exceptionHandlers: [new winston_1.transports.File({ filename: 'logs/exceptions.log' })]
});
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (config_1["default"].node_env !== 'production') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.simple()
    }));
}
exports["default"] = logger;
