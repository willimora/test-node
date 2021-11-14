"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
var Products_1 = require("./Products");
var Task_type_1 = require("./Task_type");
var typeorm_1 = require("typeorm");
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Tasks.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Task_type_1.Task_type; }, function (type) { return type.id; }, { eager: true }),
        __metadata("design:type", Task_type_1.Task_type)
    ], Tasks.prototype, "task_type", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Products_1.Products; }, function (prod) { return prod.id; }, { eager: true }),
        __metadata("design:type", Products_1.Products)
    ], Tasks.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Tasks.prototype, "task_title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Tasks.prototype, "datetime", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: null }),
        __metadata("design:type", Date)
    ], Tasks.prototype, "deleted_at", void 0);
    Tasks = __decorate([
        (0, typeorm_1.Entity)()
    ], Tasks);
    return Tasks;
}());
exports.Tasks = Tasks;
//# sourceMappingURL=Tasks.js.map