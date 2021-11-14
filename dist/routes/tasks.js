"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TasksController_1 = __importDefault(require("../controller/TasksController"));
var router = (0, express_1.Router)();
router.post('/newtask', TasksController_1.default.newTask);
router.get('/getalltasks', TasksController_1.default.getAllTasks);
router.patch('/deletetask', TasksController_1.default.deleteTask);
exports.default = router;
//# sourceMappingURL=tasks.js.map