"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductsController_1 = __importDefault(require("../controller/ProductsController"));
var router = (0, express_1.Router)();
router.get('/', ProductsController_1.default.getAll);
router.post('/new', ProductsController_1.default.new);
exports.default = router;
//# sourceMappingURL=products.js.map