"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
/* import routes */
const default_1 = require("./default");
// declare the routes for router
exports.routes = express_1.default.Router();
// register routes
exports.routes.use("/health", default_1.defaultRoute);
