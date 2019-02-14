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
var core_1 = require("@angular/core");
var AlumnosCountComponent = (function () {
    function AlumnosCountComponent() {
        this.opcionElegida = 'Todos';
        this.globalElegido = new core_1.EventEmitter();
        this.todos = 0;
        this.hombres = 0;
        this.mujeres = 0;
    }
    AlumnosCountComponent.prototype.cuandoCambiemos = function () {
        this.globalElegido.emit(this.opcionElegida);
        console.log(this.opcionElegida);
    };
    return AlumnosCountComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AlumnosCountComponent.prototype, "globalElegido", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlumnosCountComponent.prototype, "todos", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlumnosCountComponent.prototype, "hombres", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlumnosCountComponent.prototype, "mujeres", void 0);
AlumnosCountComponent = __decorate([
    core_1.Component({
        selector: 'cuantos-alumnos',
        templateUrl: "app/alumno/AlumnosCount.Component.html",
    })
], AlumnosCountComponent);
exports.AlumnosCountComponent = AlumnosCountComponent;
//# sourceMappingURL=AlumnosCount.Component.js.map