"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
//declare router
exports.defaultRoute = (0, express_1.Router)();
// crate request and response
exports.defaultRoute.get('/', async (req, res) => {
    res.send({ "message": "API is working ok" });
});
