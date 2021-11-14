"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Task_type_1 = require("./../entity/Task_type");
var Products_1 = require("./../entity/Products");
var Tasks_1 = require("./../entity/Tasks");
var typeorm_1 = require("typeorm");
var TasksController = /** @class */ (function () {
    function TasksController() {
    }
    var _a;
    _a = TasksController;
    TasksController.newTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, task_title, datetime, id_taskType, id_product, id, taskRepository, productRepository, taskTypeRepository, task, product, task_type, error_1, error_2, error_3, error_4;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, task_title = _b.task_title, datetime = _b.datetime, id_taskType = _b.id_taskType, id_product = _b.id_product, id = _b.id;
                    taskRepository = (0, typeorm_1.getRepository)(Tasks_1.Tasks);
                    productRepository = (0, typeorm_1.getRepository)(Products_1.Products);
                    taskTypeRepository = (0, typeorm_1.getRepository)(Task_type_1.Task_type);
                    task = new Tasks_1.Tasks();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, productRepository.findOneOrFail(id_product)];
                case 2:
                    product = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    res.status(404).json({ message: 'No se encontro producto' });
                    return [3 /*break*/, 4];
                case 4:
                    _c.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, taskTypeRepository.findOneOrFail(id_taskType)];
                case 5:
                    task_type = _c.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _c.sent();
                    res.status(404).json({ message: 'No se encontro tarea' });
                    return [3 /*break*/, 7];
                case 7:
                    if (!id) return [3 /*break*/, 11];
                    _c.label = 8;
                case 8:
                    _c.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, taskRepository.findOneOrFail(id)];
                case 9:
                    task = _c.sent();
                    return [3 /*break*/, 11];
                case 10:
                    error_3 = _c.sent();
                    res.status(404).json({ message: 'No se encontro tarea' });
                    return [3 /*break*/, 11];
                case 11:
                    task.task_title = task_title;
                    task.task_type = task_type;
                    task.datetime = datetime;
                    task.product = product;
                    _c.label = 12;
                case 12:
                    _c.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, taskRepository.save(task)];
                case 13:
                    _c.sent();
                    return [3 /*break*/, 15];
                case 14:
                    error_4 = _c.sent();
                    res.status(404).json({ message: 'Error al guardar la tarea' });
                    return [3 /*break*/, 15];
                case 15:
                    res.status(200).json({ message: 'Tarea cargada exitosamente' });
                    return [2 /*return*/];
            }
        });
    }); };
    TasksController.getAllTasks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var taskRepository, tasks, error_5;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    taskRepository = (0, typeorm_1.getRepository)(Tasks_1.Tasks);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, taskRepository.find()];
                case 2:
                    tasks = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    res.status(404).json({ message: 'No se encontraron resultados' });
                    return [3 /*break*/, 4];
                case 4:
                    if (tasks.length > 0) {
                        res.send(tasks);
                    }
                    else {
                        res.status(404).json({ message: 'error' });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    TasksController.deleteTask = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _b, id, deleted_at, taskRepository, taskToUpdate, error_6, error_7;
        return __generator(_a, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = req.body, id = _b.id, deleted_at = _b.deleted_at;
                    taskRepository = (0, typeorm_1.getRepository)(Tasks_1.Tasks);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, taskRepository.findOneOrFail(id)];
                case 2:
                    taskToUpdate = _c.sent();
                    taskToUpdate.deleted_at = deleted_at;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _c.sent();
                    res.status(404).json({ message: 'No se encontraron resultados' });
                    return [3 /*break*/, 4];
                case 4:
                    _c.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, taskRepository.save(taskToUpdate)];
                case 5:
                    _c.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_7 = _c.sent();
                    res.status(404).json({ message: 'Error al actualizar' });
                    return [3 /*break*/, 7];
                case 7:
                    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
                    return [2 /*return*/];
            }
        });
    }); };
    return TasksController;
}());
exports.default = TasksController;
//# sourceMappingURL=TasksController.js.map