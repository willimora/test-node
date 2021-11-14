"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = __importDefault(require("./products"));
var tasks_1 = __importDefault(require("./tasks"));
var routes = (0, express_1.Router)();
routes.use('/products', products_1.default);
routes.use('/tasks', tasks_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map