"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var path_1 = require("path");
dotenv.config({
    path: path_1["default"].resolve(__dirname, '../../.env')
});
var config = {
    node_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    cors_origin: process.env.CORS_ORIGIN || 'http://localhost:4200'
};
exports["default"] = config;
