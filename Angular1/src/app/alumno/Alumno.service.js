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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AlumnoService = (function () {
    function AlumnoService(_http) {
        this._http = _http;
    }
    AlumnoService.prototype.getAlumnos = function () {
        return [
            {
                nombre: 'Perico',
                apellidos: 'Garcia',
                direccion: 'Sadaba',
                fnac: '01/02/1970',
                sexo: 'hombre'
            },
            {
                nombre: 'Miguelina',
                apellidos: 'Campor',
                direccion: 'Luna',
                fnac: '04/02/1989',
                sexo: 'mujer'
            },
            {
                nombre: 'Juan',
                apellidos: 'Apellaniz',
                direccion: 'Haro',
                fnac: '01/04/1990',
                sexo: 'mujer'
            },
            {
                nombre: 'Pablo',
                apellidos: 'Lociga',
                direccion: 'Tauste',
                fnac: '01/02/1998',
                sexo: 'hombre'
            }
        ];
    };
    AlumnoService.prototype.getAlumnosPorNombre = function (nombre) {
        return this._http.get("http://localhost:50540/api/Alumnos/" + nombre)
            .map(function (response) { return response.json(); });
    };
    return AlumnoService;
}());
AlumnoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlumnoService);
exports.AlumnoService = AlumnoService;
//# sourceMappingURL=Alumno.service.js.map