"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var body_parser_1 = require("body-parser");
var config_1 = require("./config/config");
var index_1 = require("./routes/index");
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])({
    // origin is given a array if we want to have multiple origins later
    origin: [config_1["default"].cors_origin],
    credentials: true
}));
// parse application/x-www-form-urlencoded
app.use(body_parser_1["default"].urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1["default"].json());
// Helmet is used to secure this app by configuring the http-header
app.use((0, helmet_1["default"])());
app.get('/', function (_req, res) {
    res.send('Hello World!');
});
app.use('/', index_1["default"]);
exports["default"] = app;
