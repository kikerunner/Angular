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
var Alumno_Service_1 = require("./Alumno.Service");
var AlumnoListaComponent = (function () {
    function AlumnoListaComponent(losAlumnos) {
        this.losAlumnos = losAlumnos;
        this.seleccion = 'Todos';
    }
    AlumnoListaComponent.prototype.setSeleccion = function (opcionSeleccionada) {
        this.seleccion = opcionSeleccionada;
    };
    AlumnoListaComponent.prototype.ngOnInit = function () {
        this.alumnos = this.losAlumnos.getAlumnos();
    };
    AlumnoListaComponent.prototype.getNumTodos = function () {
        return this.alumnos.length;
    };
    AlumnoListaComponent.prototype.getNumHombres = function () {
        return this.alumnos.filter(function (a) { return a.sexo === "hombre"; }).length;
    };
    AlumnoListaComponent.prototype.getNumMujeres = function () {
        return this.alumnos.filter(function (a) { return a.sexo === "mujer"; }).length;
    };
    return AlumnoListaComponent;
}());
AlumnoListaComponent = __decorate([
    core_1.Component({
        selector: 'lista-alumnos',
        templateUrl: "app/alumno/AlumnoLista.component.html",
        styleUrls: ["app/alumno/Alumno.component.css"],
        providers: [Alumno_Service_1.AlumnoService]
    }),
    __metadata("design:paramtypes", [Alumno_Service_1.AlumnoService])
], AlumnoListaComponent);
exports.AlumnoListaComponent = AlumnoListaComponent;
//# sourceMappingURL=AlumnoLista.Component.js.map